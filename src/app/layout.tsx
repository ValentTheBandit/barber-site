import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://proba2.hu"),
  title: "SharpCut Barber | Prémium férfi hajvágás Budapesten",
  description:
    "Modern barber weboldal szolgáltatásokkal, árlistával, véleményekkel, Google Maps integrációval és időpontkérő űrlappal.",
  keywords: [
    "barber",
    "fodrász",
    "férfi hajvágás",
    "szakáll igazítás",
    "barber Budapest",
    "időpontfoglalás",
  ],
  openGraph: {
    title: "SharpCut Barber",
    description: "Prémium barber élmény modern férfiaknak.",
    url: "https://proba2.hu",
    siteName: "SharpCut Barber",
    locale: "hu_HU",
    type: "website",
    images: [
      {
        url: "/images/barber-hero.jpg",
        width: 1200,
        height: 630,
        alt: "SharpCut Barber",
      },
    ],
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