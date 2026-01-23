# AI DIAL Frontend Template

A starter template for building AI DIAL applications with modern web technologies.

## Tech Stack

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[Nx](https://nx.dev/)** - Smart monorepo build system
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[@epam/ai-dial-ui-kit](https://github.com/epam/ai-dial-ui-kit)** - AI DIAL UI components
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication for Next.js
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vitest](https://vitest.dev/)** - Fast unit testing framework

## Getting Started

### Prerequisites

- Node.js >= 20
- npm or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-org/ai-dial-frontend-template.git
   cd ai-dial-frontend-template
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   ```bash
   cp apps/ai-dial-app/.env.template apps/ai-dial-app/.env.local
   ```

   Edit `.env.local` with your configuration:

   ```bash
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key  # Generate with: openssl rand -base64 32
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ai-dial-frontend-template/
├── apps/
│   └── ai-dial-app/           # Next.js application
│       ├── src/
│       │   ├── app/           # App Router pages and layouts
│       │   │   ├── api/       # API routes
│       │   │   ├── layout.tsx # Root layout
│       │   │   └── page.tsx   # Home page
│       │   └── utils/         # Utility functions
│       │       └── auth/      # Authentication utilities
│       ├── tailwind.config.js
│       ├── next.config.js
│       └── tsconfig.json
├── nx.json                    # Nx configuration
├── package.json
├── tsconfig.base.json
└── eslint.config.mjs
```

## Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |
| `npm run test`  | Run tests                |

## Authentication

This template includes NextAuth.js with pre-configured support for:

- GitHub OAuth
- Google OAuth
- Azure AD
- Keycloak

To enable a provider, add the required environment variables to `.env.local`.

### Example: GitHub OAuth

1. Create a GitHub OAuth App at https://github.com/settings/developers
2. Add to `.env.local`:

   ```bash
   AUTH_GITHUB_CLIENT_ID=your-client-id
   AUTH_GITHUB_SECRET=your-client-secret
   ```

## Customization

### Adding New Pages

Create new pages in `apps/ai-dial-app/src/app/`:

```tsx
// apps/ai-dial-app/src/app/about/page.tsx
export default function AboutPage() {
  return <h1>About</h1>;
}
```

### Using UI Kit Components

```tsx
import { DialPrimaryButton, DialNeutralButton } from '@epam/ai-dial-ui-kit';

export default function MyComponent() {
  return (
    <div>
      <DialPrimaryButton label="Primary Action" onClick={() => {}} />
      <DialNeutralButton label="Secondary Action" onClick={() => {}} />
    </div>
  );
}
```

### Styling with Tailwind

The template includes a pre-configured Tailwind setup with AI DIAL design tokens:

```tsx
<div className="bg-layer-1 text-primary p-4 rounded-lg border border-secondary">
  <h2 className="text-accent-primary">Styled Content</h2>
</div>
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the Apache License 2.0.

## Resources

- [AI DIAL Documentation](https://docs.dialx.ai/)
- [AI DIAL UI Kit](https://github.com/epam/ai-dial-ui-kit)
- [Next.js Documentation](https://nextjs.org/docs)
- [Nx Documentation](https://nx.dev/getting-started/intro)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
