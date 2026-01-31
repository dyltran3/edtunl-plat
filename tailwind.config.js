/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#2b6cee",
        "primary-purple": "#7f13ec",
        "background-light": "#f6f6f8",
        "background-dark": "#101622",
        "background-light-alt": "#f7f6f8",
        "background-dark-alt": "#191022",
        "pastel-lavender": "#e9d5ff",
        "pastel-mint": "#d1fae5",
        "pastel-yellow": "#fef9c3",
        "pastel-pink": "#fce7f3",
        "pastel-blue": "#dbeafe",
        "pastel-coral": "#fda4af",
        "pastel-peach": "#fff3e0",
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "sans-serif"],
        "spline": ["Spline Sans", "sans-serif"],
        "noto": ["Noto Sans", "sans-serif"],
        "sans": ["Plus Jakarta Sans", "sans-serif"], // Default sans
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
