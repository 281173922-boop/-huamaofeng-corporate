import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9dffd',
          300: '#7cc5fb',
          400: '#36a9f6',
          500: '#0c8ee7',
          600: '#0070c4',
          700: '#01599f',
          800: '#064c83',
          900: '#0b406d',
        },
      },
    },
  },
  plugins: [],
};

export default config;
