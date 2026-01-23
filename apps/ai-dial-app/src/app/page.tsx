'use client';

import { DialPrimaryButton, DialNeutralButton } from '@epam/ai-dial-ui-kit';
import { IconBrandGithub, IconRocket } from '@tabler/icons-react';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-layer-1">
      <div className="flex flex-col items-center gap-8 max-w-2xl text-center">
        <div className="flex items-center gap-4">
          <IconRocket size={48} className="text-accent-primary" />
          <h1 className="text-4xl font-bold text-primary">AI DIAL Frontend Template</h1>
        </div>

        <p className="text-secondary text-lg">
          A starter template for building AI DIAL applications with Next.js App Router, Nx, Tailwind
          CSS, and @epam/ai-dial-ui-kit.
        </p>

        <div className="flex flex-col gap-4 w-full max-w-md p-6 bg-layer-2 rounded-lg border border-secondary">
          <h2 className="text-xl font-semibold text-primary">Authentication Status</h2>

          {status === 'loading' && <p className="text-secondary">Loading...</p>}

          {status === 'authenticated' && session && (
            <div className="flex flex-col gap-4">
              <p className="text-success">
                Signed in as: <span className="font-medium">{session.user?.email}</span>
              </p>
              <DialNeutralButton label="Sign Out" onClick={() => signOut()} />
            </div>
          )}

          {status === 'unauthenticated' && (
            <div className="flex flex-col gap-4">
              <p className="text-secondary">Not signed in</p>
              <DialPrimaryButton label="Sign In" onClick={() => signIn()} />
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <DialPrimaryButton
            label="UI Kit Documentation"
            iconBefore={<IconBrandGithub size={18} />}
            onClick={() => window.open('https://github.com/epam/ai-dial-ui-kit', '_blank')}
          />
          <DialNeutralButton
            label="AI DIAL"
            onClick={() => window.open('https://dialx.ai', '_blank')}
          />
        </div>

        <div className="mt-8 p-6 bg-layer-2 rounded-lg border border-secondary w-full">
          <h2 className="text-xl font-semibold text-primary mb-4">Tech Stack</h2>
          <ul className="grid grid-cols-2 gap-2 text-left">
            <li className="text-secondary">• Next.js 15 (App Router)</li>
            <li className="text-secondary">• Nx Monorepo</li>
            <li className="text-secondary">• Tailwind CSS</li>
            <li className="text-secondary">• @epam/ai-dial-ui-kit</li>
            <li className="text-secondary">• NextAuth.js</li>
            <li className="text-secondary">• TypeScript</li>
            <li className="text-secondary">• Vitest</li>
            <li className="text-secondary">• ESLint + Prettier</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
