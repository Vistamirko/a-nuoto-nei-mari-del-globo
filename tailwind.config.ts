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
        poster: {
          blue: "#1257C9",
          darkBlue: "#0B45A8",
          navy: "#071A42",
          midnight: "#040F28",
          green: "#22E57A",
          yellow: "#FFE500",
          light: "#F0F6FF",
          border: "rgba(255, 255, 255, 0.2)",
        },
        ocean: {
          abyss: "#040F28",
          950: "#071A42",
          900: "#0B45A8",
          850: "#1257C9",
          800: "#1A66DE",
          700: "#2B77EE",
          600: "#3D87F5",
          500: "#60A5FA",
          400: "#93C5FD",
          300: "#BFDBFE",
          200: "#DBEAFE",
          100: "#EFF6FF",
          50: "#F8FAFC",
        },
        sand: {
          600: "#B88746",
          500: "#D4A373",
          400: "#E2B774",
          300: "#ECD09F",
          100: "#FAF3E0",
          50: "#FDFBF7",
        },
        salt: "#FFFFFF",
      },
      fontFamily: {
        macchia: ['"macchia"', "sans-serif"],
        display: ['"macchia"', "sans-serif"],
        handwriting: ['"Caveat"', '"Kalam"', "cursive", "sans-serif"],
        scritto: ['"Caveat"', '"Kalam"', "cursive", "sans-serif"],
        mono: ["Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"],
        sans: ["Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"],
      },
      backgroundImage: {
        "poster-blue-gradient": "linear-gradient(180deg, #1257C9 0%, #0B45A8 60%, #071A42 100%)",
        "poster-navy-gradient": "linear-gradient(180deg, #071A42 0%, #040F28 100%)",
        "surface-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%)",
      },
      animation: {
        "wave-pulse": "wavePulse 8s ease-in-out infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "water-shimmer": "shimmer 10s linear infinite",
      },
      keyframes: {
        wavePulse: {
          "0%, 100%": { transform: "scale(1) rotate(0deg)", opacity: "0.4" },
          "50%": { transform: "scale(1.05) rotate(1deg)", opacity: "0.7" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
