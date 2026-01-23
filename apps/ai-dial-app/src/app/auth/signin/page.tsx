'use client';

import { signIn, getProviders } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { DialPrimaryButton } from '@epam/ai-dial-ui-kit';
import { IconLogin } from '@tabler/icons-react';

type Provider = {
  id: string;
  name: string;
  type: string;
};

export default function SignInPage() {
  const [providers, setProviders] = useState<Record<string, Provider> | null>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-layer-1">
      <div className="flex flex-col items-center gap-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-primary">Sign In</h1>
        <p className="text-secondary">Choose a provider to sign in to your account.</p>

        <div className="flex flex-col gap-4 w-full">
          {providers &&
            Object.values(providers).map((provider) => (
              <DialPrimaryButton
                key={provider.id}
                label={`Sign in with ${provider.name}`}
                iconBefore={<IconLogin size={18} />}
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              />
            ))}

          {!providers && (
            <p className="text-secondary">
              No authentication providers configured. Check your environment variables.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
