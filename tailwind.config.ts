import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12143a",          // body text
        line: "#dfe3ec",         // hairline borders on cards & rules
        surface: "#f6f8fc",      // card headers, footer, hero band
        "dem-blue": "#1a3fa0",   // primary accent: links, buttons, active nav
        "dem-red": "#b3202c",    // sparing: dates, tags, donate
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": "0.70rem",
      },
      letterSpacing: {
        "very-tight": "-0.025em",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
