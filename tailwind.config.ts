import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Urbanist", "sans-serif"],
        secondary: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
