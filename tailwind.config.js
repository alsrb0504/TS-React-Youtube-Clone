/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#ff0000",
      },
    },
  },
  plugins: [require(`@tailwindcss/line-clamp`)],
};
