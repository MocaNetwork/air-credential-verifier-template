import { env } from "@/lib/env";
import * as jose from "jose";

type Scope = "verify";

export interface JwtPayload {
  partnerId: string;
  scope: Scope;
  [key: string]: unknown;
}

export const signJwt = async (payload: JwtPayload): Promise<string> => {
  const privateKey = await jose.importPKCS8(
    withPrivateKeyHeaders(env.PARTNER_PRIVATE_KEY),
    env.SIGNING_ALGORITHM
  );

  const jwt = await new jose.SignJWT(payload)
    .setProtectedHeader({
      alg: env.SIGNING_ALGORITHM,
      kid: env.NEXT_PUBLIC_PARTNER_ID,
    })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(privateKey);

  return jwt;
};

export const withPrivateKeyHeaders = (privateKey: string): string => {
  return privateKey
    ? `-----BEGIN PRIVATE KEY-----\n${privateKey}\n-----END PRIVATE KEY-----`
    : privateKey;
};
