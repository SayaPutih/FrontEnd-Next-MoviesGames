/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        first: "#e63a42",
        second: "#e68c5a",
        third: "#ffde52",
        subfirst: "#ffffff",
        subsecond: "#bdc5de",
      },
    },
  },
  plugins: [],
};
