# Credential Verifier Template

A modern example application for verifying verifiable credentials using Airkit, with a customizable UI and type-safe development.

## Features

- **Credential Verification**: Verify verifiable credentials using Airkit.
- **Modern UI**: Built with Shadcn UI and Tailwind CSS for a sleek design.
- **Type Safety**: Developed with TypeScript for robust and maintainable code.
- **Environment-based Configuration**: Easily switch between environments (sandbox, production).

## Getting Started

### Prerequisites

1. **Create a AIR Kit Partner Account**
   - Sign up for a Partner Account at [Airkit Developer Dashboard](https://developers.sandbox.air3.com/dashboard).

2. **Development Environment**
   - Install [Node.js](https://nodejs.org/) (v18 or later).
   - Use [pnpm](https://pnpm.io/) (recommended) or npm.
  

### Installation

1. Clone the repository:

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Update `.env.local` with your configuration (see [Configuration](#configuration)).

4. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

### Environment Variables

Create a `.env.local` file and configure the following variables:

#### Client-side Variables (`NEXT_PUBLIC_*`)
- `NEXT_PUBLIC_PARTNER_ID`: Your partner ID.
- `NEXT_PUBLIC_VERIFIER_DID`: Your verifier DID.
- `NEXT_PUBLIC_VERIFIER_PROGRAM_ID`: Verification program ID.
- `NEXT_PUBLIC_HEADLINE`: Header text displayed on the page.
- `NEXT_PUBLIC_APP_NAME`: Application name.
- `NEXT_PUBLIC_BUILD_ENV`: Build environment (`production`, `sandbox`, `staging`).
- `NEXT_PUBLIC_THEME`: The theme of the app (`light`, `dark`, `system`)

#### Server-side Variables
- `PARTNER_PRIVATE_KEY`: Your private key.
- `SIGNING_ALGORITHM`: Algorithm used for signing the JWT (e.g., `ES256`, `RS256`).

To generate new ES256 key pair, you may use the following commands:
```bash
openssl ecparam -name prime256v1 -genkey -noout | openssl pkcs8 -topk8 -nocrypt -out ec256-private.pem
openssl ec -in ec256-private.pem -pubout -out ec256-public.pem
```

## Deployment

### Deploy to Vercel

Deploy this application to Vercel with one click: https://vercel.com/new/clone?repository-url=https://github.com/your-username/air-credential-verifier-example

1. Use the above link to deploy to vercel after replacing `your-username` with your github handle.
2. Configure environment variables in your Vercel project settings.

### Build for Production

To build the application for production:
```bash
pnpm build
# or
npm run build
```

Start the production server:
```bash
pnpm start
# or
npm start
```

## Advanced


### Customizing the UI

This project uses Shadcn UI for a customizable design system. Refer to the [Shadcn UI Theming Guide](https://ui.shadcn.com/docs/theming) for detailed instructions.


## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn UI](https://ui.shadcn.com/) - UI components
- [AIR Kit](https://air3.com/) - Credential verification
- [Zod](https://zod.dev/) - Schema validation
- [Axios](https://axios-http.com/) - HTTP client
- [Jose](https://github.com/panva/jose) - JWT handling
- 
## Learn More

Explore the documentation for the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [MOCA Network](https://moca.network/)
- [Shadcn UI](https://ui.shadcn.com/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
