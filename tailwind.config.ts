import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#1B1A1A",
        card: "#252424",
        "card-elevated": "#2E2B2B",
        pink: "#D4607A",
        cream: "#F5E6D0",
        "text-primary": "#E8E2DA",
        muted: "#88847E",
        border: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        mono: ["DM Mono", "Courier New", "monospace"],
        pixel: ['"Press Start 2P"', "monospace"],
      },
      animation: {
        "scroll-x": "scroll-x 18s linear infinite",
        "fade-up": "fade-up 0.6s ease forwards",
      },
      keyframes: {
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
