import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asian Merveille — Un Voyage Tropical",
  description:
    "Jus pétillants exotiques. Pastèque, Ananas, Raisin. 60% de jus pur. Exotique · Frais · Pétillant.",
  keywords: ["jus pétillant", "boisson exotique", "asian merveille", "sparkling juice"],
  openGraph: {
    title: "Asian Merveille — Un Voyage Tropical",
    description: "Jus pétillants exotiques. 60% de jus pur.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body className="bg-[var(--bg)] text-[var(--fg)] antialiased">
        {children}
      </body>
    </html>
  );
}
