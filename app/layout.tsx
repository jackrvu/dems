import "./globals.css";
import type { Metadata } from "next";
import { Inter, Azeret_Mono } from "next/font/google";
import { site } from "@/content/site";

/* Inter carries the reading copy; Azeret Mono carries the voice —
   wordmark, section labels, dates, tags. */
const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = Azeret_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
