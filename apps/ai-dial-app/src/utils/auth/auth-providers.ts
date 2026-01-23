import { OAuthConfig } from 'next-auth/providers/oauth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import AzureADProvider from 'next-auth/providers/azure-ad';
import KeycloakProvider from 'next-auth/providers/keycloak';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const providers: OAuthConfig<any>[] = [];

// GitHub Provider
if (process.env.AUTH_GITHUB_CLIENT_ID && process.env.AUTH_GITHUB_SECRET) {
  providers.push(
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  );
}

// Google Provider
if (process.env.AUTH_GOOGLE_CLIENT_ID && process.env.AUTH_GOOGLE_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  );
}

// Azure AD Provider
if (
  process.env.AUTH_AZURE_AD_CLIENT_ID &&
  process.env.AUTH_AZURE_AD_SECRET &&
  process.env.AUTH_AZURE_AD_TENANT_ID
) {
  providers.push(
    AzureADProvider({
      clientId: process.env.AUTH_AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AUTH_AZURE_AD_SECRET,
      tenantId: process.env.AUTH_AZURE_AD_TENANT_ID,
    }),
  );
}

// Keycloak Provider
if (
  process.env.AUTH_KEYCLOAK_CLIENT_ID &&
  process.env.AUTH_KEYCLOAK_SECRET &&
  process.env.AUTH_KEYCLOAK_ISSUER
) {
  providers.push(
    KeycloakProvider({
      clientId: process.env.AUTH_KEYCLOAK_CLIENT_ID,
      clientSecret: process.env.AUTH_KEYCLOAK_SECRET,
      issuer: process.env.AUTH_KEYCLOAK_ISSUER,
    }),
  );
}

export const authProviders = providers;
