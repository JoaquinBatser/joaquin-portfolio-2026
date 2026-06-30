import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joaquin Batista",
  description: "Founder, Visionary, Builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-2xl mx-auto px-6 py-24 antialiased selection:bg-neutral-100">
        {children}
      </body>
    </html>
  );
}