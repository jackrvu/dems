import "./globals.css";
import type { Metadata } from "next";
import { Azeret_Mono } from "next/font/google";
import { site } from "@/content/site";

const mono = Azeret_Mono({
  weight: ["200", "400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name.toLowerCase()} — ${site.tagline.toLowerCase()}`,
    template: `%s — ${site.name.toLowerCase()}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="min-h-screen w-full">
      <body
        className={`${mono.className} min-h-screen flex justify-center items-start w-full`}
      >
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-6xl p-4 mt-12 mb-12 custom-width">
          {children}
        </div>
      </body>
    </html>
  );
}
