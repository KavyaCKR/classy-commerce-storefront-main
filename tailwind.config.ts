
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6A11CB', // Previous primary color
          50: '#E6E0FF',
          100: '#C6B1FF',
          200: '#A687FF',
          300: '#6A11CB',
          400: '#4A0E8A',
        },
        secondary: {
          DEFAULT: '#FF6B6B', // Previous secondary color
          50: '#FFE0E0',
          100: '#FF9C9C',
          200: '#FF6B6B',
          300: '#E64F4F',
        },
        accent: {
          DEFAULT: '#4ECDC4', // Previous accent color
          50: '#E0F8F6',
          100: '#A6F0E8',
          200: '#4ECDC4',
          300: '#01A89E',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
