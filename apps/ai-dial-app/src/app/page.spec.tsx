import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Home from './page';

vi.mock('next-auth/react', () => ({
  useSession: vi.fn(() => ({
    data: null,
    status: 'unauthenticated',
  })),
  signIn: vi.fn(),
  signOut: vi.fn(),
}));

describe('Home Page', () => {
  test('renders the main heading', () => {
    render(<Home />);
    expect(screen.getByText('AI DIAL Frontend Template')).toBeInTheDocument();
  });

  test('renders tech stack section', () => {
    render(<Home />);
    expect(screen.getByText('Tech Stack')).toBeInTheDocument();
  });

  test('shows sign in button when unauthenticated', () => {
    render(<Home />);
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });
});
