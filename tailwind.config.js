/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        Inter: "'Inter', sans-serif ",
        Jomolhari: "'Jomolhari', serif ",
        Italiana: "'Italiana', serif",
      },
    },
  },
  plugins: [],
}

