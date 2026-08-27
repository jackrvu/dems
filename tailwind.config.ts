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
        ink: "#030335",          // near-black navy, the base text color
        "dem-blue": "#1a3fa0",   // accent for links / active nav
        "dem-red": "#b3202c",    // used sparingly for dates & tags
      },
      fontSize: {
        "2xs": "0.70rem",
        "3xs": "0.55rem",
      },
      letterSpacing: {
        "very-tight": "-0.025em",
      },
      backgroundImage: {
        "dot-pattern": "radial-gradient(circle, #9aa6c4 0.5px, transparent 0.5px)",
      },
      backgroundSize: {
        "dot-pattern": "5px 5px",
      },
    },
  },
  plugins: [],
};

export default config;
