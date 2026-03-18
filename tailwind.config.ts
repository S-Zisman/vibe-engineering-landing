import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#09080A",
        deep: "#0F0D10",
        surface: "#161318",
        raised: "#1E1A20",
        "accent-bright": "#C4B498",
        "accent-mid": "#968770",
        "accent-dim": "#564D3F",
        "text-primary": "#F0EDE8",
        "text-body": "#DDD8CE",
        "text-muted": "#9A938A",
        "text-ghost": "#4A4540",
      },
      borderColor: {
        "accent-border": "rgba(196, 180, 152, 0.14)",
        "main-border": "rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        mono: ["IBM Plex Mono", "monospace"],
        body: ["system-ui", "Inter", "sans-serif"],
      },
      letterSpacing: {
        wide: "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;
