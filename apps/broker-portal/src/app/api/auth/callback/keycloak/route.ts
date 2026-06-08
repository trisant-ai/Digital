import * as client from 'openid-client';
import { cookies } from 'next/headers';
import { getOidcConfig } from '@/lib/keycloak/oidc';
import { redis } from '@/lib/keycloak/redis';

export async function GET(request: Request) {
  const currentUrl = new URL(request.url);
  const config = await getOidcConfig();
  const cookieStore = await cookies();

  const code_verifier = cookieStore.get('code_verifier')?.value;
  const expectedState = cookieStore.get('state')?.value;

  if (!code_verifier || !expectedState) {
    return new Response('Auth transaction failed: Missing state', {
      status: 400,
    });
  }

  // Exchange the code for the TokenSet
  const tokens = await client.authorizationCodeGrant(config, currentUrl, {
    pkceCodeVerifier: code_verifier,
    expectedState: expectedState,
    idTokenExpected: true,
  });

  // Clean up transaction cookies
  cookieStore.delete('code_verifier');
  cookieStore.delete('state');

  // Provision Server-Side Session
  const sessionId = crypto.randomUUID();

  // Store the raw JWTs in Redis. Tie the Redis TTL to the Access Token expiration.
  await redis.set(`session:${sessionId}`, tokens, {
    ex: tokens.expires_in || 3600,
  });

  // Issue the opaque session identifier to the client
  cookieStore.set('app_session', sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });

  return Response.redirect(new URL('/dashboard', request.url));
}
