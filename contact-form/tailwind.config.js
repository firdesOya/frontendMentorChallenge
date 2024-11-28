/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-lighter": " hsl(148, 38%, 91%)",
        "green-medium": "hsl(169, 82%, 27%)",
        "red-warn": "hsl(0, 66%, 54%)",
        "grey-medium": "hsl(186, 15%, 59%)",
        "grey-darker": " hsl(187, 24%, 22%)",
      },
    },
  },
  plugins: [],
};
