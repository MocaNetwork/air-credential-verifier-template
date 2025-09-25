"use client";
import { Header } from "@/components/common/Header";
import { Toaster } from "@/components/ui/sonner";
import dynamic from "next/dynamic";

const Providers = dynamic(
  () => import("../../lib/providers").then((m) => m.Providers),
  {
    ssr: false,
  }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Providers>
        <Header />

        {children}
      </Providers>
      <Toaster position="top-center" />
    </>
  );
}
