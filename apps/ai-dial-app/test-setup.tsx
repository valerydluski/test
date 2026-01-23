import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

vi.mock('next-auth/react', () => ({
  useSession: vi.fn(() => {
    return { data: null, status: 'unauthenticated' };
  }),
  signIn: vi.fn(),
  signOut: vi.fn(),
}));

vi.mock('next/headers', () => ({
  headers: vi.fn(),
  cookies: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
  })),
  usePathname: vi.fn(),
  useSearchParams: vi.fn(() => new URLSearchParams()),
}));

global.IntersectionObserver = vi.fn(() => ({
  root: null,
  rootMargin: '',
  thresholds: [],
  takeRecords: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

global.ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

global.console = {
  ...console,
  error: vi.fn(),
  warn: vi.fn(),
};

afterEach(() => {
  cleanup();
});
