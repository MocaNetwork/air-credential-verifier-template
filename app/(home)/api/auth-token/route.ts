import { env } from "@/lib/env";
import { signJwt } from "@/lib/utils/jwt";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    authToken: await signJwt({
      partnerId: env.NEXT_PUBLIC_PARTNER_ID,
      scope: "verify",
    }),
  });
}
