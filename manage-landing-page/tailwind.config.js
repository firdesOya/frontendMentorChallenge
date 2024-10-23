/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          red: 'hsl(12, 88%, 59%)',
          blue: 'hsl(228, 39%, 23%)',
        },
        neutral: {
          grayishBlue: 'hsl(227, 12%, 61%)',
          veryDarkBlue: 'hsl(233, 12%, 13%)',
          paleRed: 'hsl(13, 100%, 96%)',
          lightGray: 'hsl(0, 0%, 98%)',
        },
      },
    }
  },
  safelist: [
    {
      pattern: /bg-\[url\(.*\)\]/,
    },
  ],
  plugins: [],
};
