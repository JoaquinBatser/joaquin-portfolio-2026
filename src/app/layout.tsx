import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Joaquin Batista — Founder",
  description: "Building intelligent systems that bridge the gap between human intent and machine execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans max-w-2xl mx-auto px-8 py-20 sm:py-32 antialiased selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}