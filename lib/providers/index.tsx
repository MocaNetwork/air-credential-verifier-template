"use client";
import { ThemeProvider } from "next-themes";
import React from "react";
import { env } from "../env";
import { AirkitProvider } from "./AirkitProvider";

export const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      forcedTheme={
        env.NEXT_PUBLIC_THEME !== "system" ? env.NEXT_PUBLIC_THEME : undefined
      }
    >
      <AirkitProvider>{children}</AirkitProvider>
    </ThemeProvider>
  );
};
