import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ela — Sesli Rezervasyon Asistanı",
  description:
    "Ela hiç telefonu kaçırmaz, insan gibi konuşur, ekibinizin zamanını size geri verir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={cn("h-full", "antialiased", fraunces.variable, inter.variable)}
    >
      <body className="relative flex min-h-full flex-col">{children}</body>
    </html>
  );
}
