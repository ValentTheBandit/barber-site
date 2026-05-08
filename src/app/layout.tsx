import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SharpCut Barber",
  description: "Modern barber weboldal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}