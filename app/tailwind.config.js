/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#43b9c3",
        secondary: "#C34D43",
        offWhiteBG: "#fefcf7",
        black_gray: "#444",
        default_gray: "#777",
        light_gray: "#ddd",
      },
    },
  },
  plugins: [],
};
