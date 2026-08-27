import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This repo lives inside another folder that has its own lockfile; pin the
  // workspace root so Next.js doesn't walk up and pick up the wrong one.
  turbopack: { root: __dirname },

  // The site is fully static. To publish on GitHub Pages instead of Vercel,
  // uncomment the two lines below and see the deploy notes in README.md.
  // output: "export",
  // images: { unoptimized: true },
};

export default nextConfig;
