import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/animated-background";
import MouseGlow from "@/components/mouse-glow";
import ElaAvatarWidget from "@/components/ela-avatar-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ela — İşletmenizin Sesli Yapay Zeka Asistanı",
  description: "Ela, işletmenizin telefon, WhatsApp ve sosyal medya kanallarını 32 dilde, 3 saniyede, 7/24 yöneten sesli yapay zeka asistanıdır.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col">
        <AnimatedBackground />
        <MouseGlow />
        <ElaAvatarWidget />
        <div className="relative z-10 flex flex-col flex-1">{children}</div>
      </body>
    </html>
  );
}
