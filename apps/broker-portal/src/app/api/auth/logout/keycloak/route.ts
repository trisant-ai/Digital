import * as client from 'openid-client';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { getOidcConfig } from '@/lib/keycloak/oidc';
import { redis } from '@/lib/keycloak/redis';

export async function GET(request: Request) {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('app_session')?.value;
  const postLogoutRedirectUri =
    process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  let idToken: string | undefined;

  if (sessionId) {
    // 1. Retrieve the token set from Redis to get the id_token for a seamless Keycloak logout
    const sessionData = await redis.get(`session:${sessionId}`);

    if (
      sessionData &&
      typeof sessionData === 'object' &&
      'id_token' in sessionData
    ) {
      idToken = sessionData.id_token as string;
    }

    console.log(
      '👉 Is ID Token hint being sent to Keycloak?',
      idToken ? 'YES ✅' : 'NO ❌',
    );

    // 2. Destroy the Server-Side Session in Upstash Redis
    await redis.del(`session:${sessionId}`);

    // 3. Clear the opaque session cookie from the browser
    cookieStore.delete('app_session');
  }

  try {
    // 4. Terminate the Upstream SSO Session in Keycloak
    const config = await getOidcConfig();

    const endSessionUrl = client.buildEndSessionUrl(config, {
      post_logout_redirect_uri: postLogoutRedirectUri,
      ...(idToken ? { id_token_hint: idToken } : {}), // Prevents Keycloak from asking "Are you sure you want to log out?"
    });

    console.log('👉 Final generated logout URL:', endSessionUrl.href);

    return NextResponse.redirect(endSessionUrl.href);
  } catch (error) {
    console.error('Failed to build Keycloak logout URL:', error);
    // Fallback: If OIDC discovery fails, at least return the user to the local home page
    return NextResponse.redirect(postLogoutRedirectUri);
  }
}
