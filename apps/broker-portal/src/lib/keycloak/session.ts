import { cookies } from 'next/headers';
import { redis } from '@/lib/keycloak/redis';

export async function getUserSession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('app_session')?.value;

  if (!sessionId) return null;

  // Retrieve the TokenSet stored during the callback
  const sessionData = await redis.get<{ id_token?: string }>(
    `session:${sessionId}`,
  );

  if (!sessionData || !sessionData.id_token) return null;

  try {
    console.log('sessionData', sessionData);

    // The id_token is a JWT (Header.Payload.Signature). We only need the Payload.
    const payloadBase64 = sessionData.id_token.split('.')[1];

    // Standardize the base64 string and decode it
    const normalizedBase64 = payloadBase64
      .replace(/-/g, '+')
      .replace(/_/g, '/');
    const decodedPayload = Buffer.from(normalizedBase64, 'base64').toString(
      'utf-8',
    );

    console.log('decodedPayload', decodedPayload);

    return JSON.parse(decodedPayload);
  } catch (error) {
    console.error('Failed to decode id_token:', error);
    return null;
  }
}
