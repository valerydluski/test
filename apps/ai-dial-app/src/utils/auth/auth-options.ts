import { AuthOptions } from 'next-auth';
import { authProviders } from './auth-providers';
import { authCallbacks } from './auth-callbacks';

export const authOptions: AuthOptions = {
  providers: authProviders,
  callbacks: authCallbacks,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  debug: process.env.NODE_ENV === 'development',
};
