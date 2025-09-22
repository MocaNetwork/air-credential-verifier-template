import { BUILD_ENV } from "@mocanetwork/airkit";
import { createEnv } from "@t3-oss/env-nextjs";

import { z } from "zod";

export const env = createEnv({
  server: {
    PARTNER_PRIVATE_KEY: z.string(),
    SIGNING_ALGORITHM: z.enum(["ES256", "RS256"]),
  },
  client: {
    NEXT_PUBLIC_PARTNER_ID: z.string(),
    NEXT_PUBLIC_VERIFIER_PROGRAM_ID: z.string(),
    NEXT_PUBLIC_ISSUER_URL: z.url(),
    NEXT_PUBLIC_SITE_DESCRIPTION: z.string(),
    NEXT_PUBLIC_SITE_NAME: z.string(),
    NEXT_PUBLIC_BUILD_ENV: z.enum(BUILD_ENV),
    NEXT_PUBLIC_THEME: z.enum(["light", "dark", "system"]),
  },
  runtimeEnv: {
    NEXT_PUBLIC_PARTNER_ID: process.env.NEXT_PUBLIC_PARTNER_ID,
    NEXT_PUBLIC_VERIFIER_PROGRAM_ID:
      process.env.NEXT_PUBLIC_VERIFIER_PROGRAM_ID,
    NEXT_PUBLIC_ISSUER_URL: process.env.NEXT_PUBLIC_ISSUER_URL,
    NEXT_PUBLIC_SITE_DESCRIPTION: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
    NEXT_PUBLIC_BUILD_ENV: process.env.NEXT_PUBLIC_BUILD_ENV,
    NEXT_PUBLIC_THEME: process.env.NEXT_PUBLIC_THEME,
    PARTNER_PRIVATE_KEY: process.env.PARTNER_PRIVATE_KEY,
    SIGNING_ALGORITHM: process.env.SIGNING_ALGORITHM,
  },
});

export const isProduction = process.env.NODE_ENV === "production";
