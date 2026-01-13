import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        accent: "#38bdf8",
        "accent-dark": "#0ea5e9",
      },
      fontFamily: {
        mono: ["'Fira Code'", "'Courier New'", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
