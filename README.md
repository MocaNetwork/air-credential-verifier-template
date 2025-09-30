# Credential Verifier Template

A modern template for verifying verifiable credentials using AIR Kit, with a customizable UI and type-safe development.

## Getting Started

### Prerequisites

**Development Environment**
   - Install [Node.js](https://nodejs.org/) (v18 or later).
   - Use [pnpm](https://pnpm.io/) (recommended) or npm.

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/MocaNetwork/air-credential-verifier-template.git
   cd air-credential-verifier-template
   ```

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
   Update `.env.local` with your configuration.

4. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customizing the Verifier Template

### 1. Set up your verification details
   1. Log in or Sign up for a Partner Account at [Sandbox Developer Dashboard](https://developers.sandbox.air3.com/dashboard). You may obtain your Partner Id from Account -> General Settings.
   2. Under the Verifier section, Create a Verification Program that's appropriate for your application. Make note of the Verification Program ID.

### 2. Set up Signing keys

Next, you'll need to set up a private key, which is used for JWT signing in the verification process. 

You may use your existing private key, or generate a new one. To generate a new ES256 private key, you may use the following command:
```bash
openssl ecparam -name prime256v1 -genkey -noout | openssl pkcs8 -topk8 -nocrypt | tr -d '\n'
```
Copy the middle part (between BEGIN and END lines) from the generated file and paste it as the value for `PARTNER_PRIVATE_KEY` in your `.env.local` file. (E.g., `PARTNER_PRIVATE_KEY="MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg..."`)

Example of how it should look in your `.env.local` file:
```bash
PARTNER_PRIVATE_KEY="MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg..."
```

**Note**: Keep the private key safe and never commit it as part of your source control.

### 3. Set up Environment Variables
Create a `.env.local` file and configure the variables - see [Details](#environment-variables)

### 4. Develop, Test, and Deploy

Once your environment variables are set, you should be able to verify credentials locally as well as on your deployed server.

## Environment Variables

#### Client-side Variables 
| Variable                           | Description                                                                 |
|------------------------------------|-----------------------------------------------------------------------------|
| `NEXT_PUBLIC_PARTNER_ID`           | Your partner ID.                                                           |
| `NEXT_PUBLIC_VERIFIER_PROGRAM_ID`  | Verification program ID.                                                   |
| `NEXT_PUBLIC_ISSUER_URL`           | URL where users can obtain credentials if they don't have any to verify. |
| `NEXT_PUBLIC_SITE_NAME`            | Site/application name.                                                     |
| `NEXT_PUBLIC_SITE_DESCRIPTION`     | Site description text.                                                     |
| `NEXT_PUBLIC_RETURN_SITE_NAME`     | (Optional) Display name of your application that users will return to after verification. Defaults to `NEXT_PUBLIC_SITE_NAME`. |
| `NEXT_PUBLIC_RETURN_URL`           | (Optional) Redirect URL where users will be sent after completing verification. Defaults to `/`. |
| `NEXT_PUBLIC_BUILD_ENV`            | Build environment (`production`, `sandbox`, `staging`).                   |
| `NEXT_PUBLIC_THEME`                | The theme of the app (`light`, `dark`, `system`).                         |

#### Server-side Variables
| Variable             | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| `PARTNER_PRIVATE_KEY`| Your private key.                                                          |
| `SIGNING_ALGORITHM`  | Algorithm used for signing the JWT (e.g., `ES256`, `RS256`).               |

## Advanced

### Whitelist your domain

After deploying your application, you need to add your domain to the allowed domains list in the Partner Dashboard:

1. Go to [Sandbox Developer Dashboard](https://developers.sandbox.air3.com/dashboard)
2. Navigate to **Account > Domains**
3. Add your deployed application URL to the allowed domains list

This ensures that your deployed application can properly communicate with the AIR Kit services.

### Production Build and Deployment

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

#### Deploying to Vercel

Click the button below to deploy directly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MocaNetwork/air-credential-verifier-example&env=NEXT_PUBLIC_PARTNER_ID,NEXT_PUBLIC_VERIFIER_PROGRAM_ID,NEXT_PUBLIC_ISSUER_URL,NEXT_PUBLIC_SITE_NAME,NEXT_PUBLIC_SITE_DESCRIPTION,NEXT_PUBLIC_BUILD_ENV,NEXT_PUBLIC_THEME,PARTNER_PRIVATE_KEY,SIGNING_ALGORITHM&envDescription=Configure%20your%20AIR%20Kit%20credentials%20and%20application%20settings&envLink=https://github.com/MocaNetwork/air-credential-verifier-example/blob/main/README.md)

### Customizing the UI

This project uses Shadcn UI for a customizable design system. Refer to the [Shadcn UI Theming Guide](https://ui.shadcn.com/docs/theming) for detailed instructions.

## Features

- **Credential Verification**: Verify verifiable credentials using AIR Kit.
- **Modern UI**: Built with Shadcn UI and Tailwind CSS for a sleek design.
- **Type Safety**: Developed with TypeScript for robust and maintainable code.
- **Environment-based Configuration**: Easily switch between environments (sandbox, production).

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn UI](https://ui.shadcn.com/) - UI components
- [AIR Kit](https://air3.com/) - Credential verification
- [Zod](https://zod.dev/) - Schema validation
- [Axios](https://axios-http.com/) - HTTP client
- [Jose](https://github.com/panva/jose) - JWT handling
## Learn More

Explore the documentation for the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [MOCA Network](https://moca.network/)
- [Shadcn UI](https://ui.shadcn.com/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
