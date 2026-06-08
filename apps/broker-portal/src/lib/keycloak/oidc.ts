import * as client from 'openid-client';

export async function getOidcConfig() {
  const issuerUrl = new URL(process.env.KEYCLOAK_ISSUER!);

  // v6 utilizes an ESM discovery mechanism natively compatible with Edge/Node
  const config = await client.discovery(
    issuerUrl,
    process.env.KEYCLOAK_CLIENT_ID!,
    process.env.KEYCLOAK_CLIENT_SECRET!,
    undefined,
    {
      execute: [client.allowInsecureRequests],
    },
  );

  return config;
}
