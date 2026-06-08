import * as client from 'openid-client';
import { cookies } from 'next/headers';
import { getOidcConfig } from '@/lib/keycloak/oidc';

export async function GET() {
  const config = await getOidcConfig();

  const code_verifier = client.randomPKCECodeVerifier();
  const code_challenge = await client.calculatePKCECodeChallenge(code_verifier);
  const state = client.randomState();

  const cookieStore = await cookies();

  // Store transient state in encrypted/secure cookies during the auth transaction
  cookieStore.set('code_verifier', code_verifier, {
    httpOnly: true,
    secure: true,
    path: '/',
  });
  cookieStore.set('state', state, { httpOnly: true, secure: true, path: '/' });

  const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback/keycloak`;

  const url = client.buildAuthorizationUrl(config, {
    redirect_uri: redirectUri,
    scope: 'openid profile email',
    code_challenge,
    code_challenge_method: 'S256',
    state,
  });

  return Response.redirect(url.href);
}
