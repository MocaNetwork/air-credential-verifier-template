"use client";

import CopyIcon from "@/app/assets/copy.svg";
import { Button } from "@/components/ui/button";
import { env } from "@/lib/env";
import { useAirkit } from "@/lib/hooks/useAirkit";
import axios from "axios";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

type AuthTokenResponse = {
  authToken: string;
};

export function VerifierModal() {
  const { airService, isInitialized } = useAirkit();
  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "initial"
  >("initial");
  const onContinue = async () => {
    setStatus("loading");

    try {
      try {
        while (!airService.isLoggedIn) {
          await airService.login();
        }
      } catch (error) {
        setStatus("initial");
        throw error;
      }

      try {
        const { authToken } = (
          await axios.get<AuthTokenResponse>("/api/auth-token")
        ).data;

        await airService.verifyCredential({
          authToken,
          programId: env.NEXT_PUBLIC_VERIFIER_PROGRAM_ID,
          redirectUrl: env.NEXT_PUBLIC_ISSUER_URL,
        });
        setStatus("success");
      } catch (error) {
        setStatus("error");
        throw error;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const buttonText = isInitialized
    ? status === "loading"
      ? "Verifying..."
      : "Continue"
    : "Initializing...";
  const isLoading = status === "loading" || !isInitialized;

  return (
    <div className="container max-w-3xl">
      {status === "success" ? (
        <div className="flex justify-center">
          <div className="w-full max-w-[462px] inline-flex flex-col rounded-3xl text-primary-foreground">
            <div className="px-8 pb-8 rounded-b-3xl flex flex-col items-center gap-4">
              <h3 className="text-center text-secondary-foreground text-lg font-semibold">
                Use this code to sign up and get your $20 trading credit
              </h3>

              <div className="p-4 rounded-3xl bg-primary/10 text-secondary-foreground inline-flex items-center gap-2">
                <span className="font-medium leading-snug">1234567890</span>
                <button
                  type="button"
                  aria-label="Copy code"
                  className="grid place-items-center w-5 h-5 text-primary/80 hover:text-primary cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText("1234567890");
                    toast.success("Code copied to clipboard");
                  }}
                >
                  <CopyIcon />
                </button>
              </div>

              <Link
                href={env.NEXT_PUBLIC_RETURN_URL}
                target={
                  env.NEXT_PUBLIC_RETURN_URL.startsWith("http")
                    ? "_blank"
                    : undefined
                }
              >
                <Button type="button" className="w-full" size="lg">
                  {`Back to ${env.NEXT_PUBLIC_RETURN_SITE_NAME}`}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full">
          <div className="px-8 pt-8 pb-8 rounded-3xl flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-3 w-full">
              <p className="text-center text-secondary-foreground text-lg font-semibold leading-snug tracking-tight max-w-[300px]">
                {env.NEXT_PUBLIC_SITE_DESCRIPTION}
              </p>
            </div>

            <Button
              size="lg"
              onClick={onContinue}
              disabled={isLoading}
              className="min-w-[200px]"
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {buttonText}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
