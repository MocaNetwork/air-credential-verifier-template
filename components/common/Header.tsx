"use client";

import Logo from "@/app/assets/logo.svg";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatAddress } from "@/lib/utils";
import Link from "next/link";
import { useAirkit } from "../../lib/hooks/useAirkit";
import { Button } from "../ui/button";
import { DialogHeader } from "../ui/dialog";

export const Header = () => {
  const { airService, isLoggedIn, loginResult } = useAirkit();

  const logout = async () => {
    if (airService.isLoggedIn) {
      await airService.logout();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between mx-auto">
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <Logo className="ml-4 mt-4" />
        </Link>
        {isLoggedIn && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="mr-4">
                Logout
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[300px]">
              <DialogHeader>
                <DialogTitle>Account</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-mono text-sm">
                    {loginResult?.abstractAccountAddress
                      ? formatAddress(loginResult?.abstractAccountAddress)
                      : "N/A"}
                  </p>
                </div>
                <Button
                  variant="destructive"
                  onClick={() => logout()}
                  className="w-full"
                >
                  Logout
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </header>
  );
};
