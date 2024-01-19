/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {},
  },
  daisyui: {
    themes: ["dracula"], // light dark cupcake halloween night sunset dracula
  },
  plugins: [require("daisyui")],
};
