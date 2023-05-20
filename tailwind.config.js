/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{tsx,jsx,ts,js}",
    "./pages/**/*.{tsx,jsx,ts,js}",
    "./components/**/*.{tsx,jsx,ts,js}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
};
