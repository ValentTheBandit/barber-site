import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SharpCut Barber | Prémium férfi hajvágás Budapesten",
  description:
    "Modern barber shop Budapesten férfi hajvágással, szakáll igazítással, árlistával és online időpontkéréssel.",
  keywords: [
    "barber",
    "fodrász",
    "férfi hajvágás",
    "szakáll igazítás",
    "barber Budapest",
    "online időpontfoglalás",
  ],
  openGraph: {
    title: "SharpCut Barber",
    description: "Prémium barber élmény modern férfiaknak.",
    url: "https://proba2.hu",
    siteName: "SharpCut Barber",
    locale: "hu_HU",
    type: "website",
  },
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