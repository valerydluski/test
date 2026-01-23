import { CallbacksOptions } from 'next-auth';

export const authCallbacks: Partial<CallbacksOptions> = {
  async jwt({ token, account, user }) {
    // Initial sign in
    if (account && user) {
      return {
        ...token,
        accessToken: account.access_token,
        refreshToken: account.refresh_token,
        accessTokenExpires: account.expires_at ? account.expires_at * 1000 : undefined,
        user,
      };
    }

    // Return previous token if the access token has not expired yet
    if (token.accessTokenExpires && Date.now() < (token.accessTokenExpires as number)) {
      return token;
    }

    // Access token has expired, try to refresh it (if you need refresh logic)
    return token;
  },

  async session({ session, token }) {
    if (token) {
      session.user = token.user as typeof session.user;
      (session as { accessToken?: string }).accessToken = token.accessToken as string;
    }
    return session;
  },

  async redirect({ url, baseUrl }) {
    // Allows relative callback URLs
    if (url.startsWith('/')) return `${baseUrl}${url}`;
    // Allows callback URLs on the same origin
    else if (new URL(url).origin === baseUrl) return url;
    return baseUrl;
  },
};

// Extend the JWT type
declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
    user?: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

declare module 'next-auth' {
  interface Session {
    accessToken?: string;
  }
}
