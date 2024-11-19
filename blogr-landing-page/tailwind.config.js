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
        "light-red": "hsl(356, 100%, 66%)",
        "very-light-red": "hsl(355, 100%, 74%)",
        "very-dark-blue": " hsl(208, 49%, 24%)",
        "grayish-blue": "hsl(240, 2%, 79%)",
        "very-dark-grayish-blue" : "hsl(207, 13%, 34%)",
        "very-dark-black-blue": "hsl(240, 10%, 16%)",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))',
        'background-gradient':'linear-gradient(to right, hsl(237, 17%, 21%),hsl(237, 23%, 32%))'
      },
    },
  },
  plugins: [],
};
