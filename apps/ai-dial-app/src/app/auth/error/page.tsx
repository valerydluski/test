'use client';

import { useSearchParams } from 'next/navigation';
import { DialNeutralButton } from '@epam/ai-dial-ui-kit';
import { IconAlertTriangle } from '@tabler/icons-react';
import Link from 'next/link';
import { Suspense } from 'react';

const errorMessages: Record<string, string> = {
  Configuration: 'There is a problem with the server configuration.',
  AccessDenied: 'You do not have permission to sign in.',
  Verification: 'The verification link may have been used or is expired.',
  Default: 'An error occurred during authentication.',
};

function AuthErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error') || 'Default';
  const errorMessage = errorMessages[error] || errorMessages.Default;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-layer-1">
      <div className="flex flex-col items-center gap-6 max-w-md text-center">
        <IconAlertTriangle size={48} className="text-error" />
        <h1 className="text-2xl font-bold text-primary">Authentication Error</h1>
        <p className="text-secondary">{errorMessage}</p>
        <Link href="/">
          <DialNeutralButton label="Go to Home" />
        </Link>
      </div>
    </main>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-layer-1">
          <p className="text-secondary">Loading...</p>
        </main>
      }
    >
      <AuthErrorContent />
    </Suspense>
  );
}
