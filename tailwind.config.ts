import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7da87a",
          dark: "#5a8a5a",
          light: "#e8f0e8",
        },
        secondary: {
          DEFAULT: "#F2C6C2",
        },
        background: {
          light: "#FAFCFA",
          dark: "#171b17",
        },
        "text-main": "#141514",
        "text-muted": "#5C665C",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
