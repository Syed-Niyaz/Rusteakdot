import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RUSTEAK DOT — Premium Furniture Solutions | Jodhpur",
  description:
    "Custom furniture for every space. Discover bespoke sofas, hand-crafted teak dining, and luxury living solutions. Design • Comfort • Elegance.",
  openGraph: {
    title: "RUSTEAK DOT — Premium Furniture Solutions",
    description:
      "Transform your space with timeless designs and premium craftsmanship. Office No. 4, First Floor, Gang Tower, Jodhpur.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f5",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
