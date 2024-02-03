/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clr: {
          fnt: "rgb(var(--clr-fnt)/ <alpha-value>)",
          bkg: "rgb(var(--clr-bg1)/ <alpha-value>)",
          acnt: "rgb(var(--clr-acnt)/ <alpha-value>)",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
