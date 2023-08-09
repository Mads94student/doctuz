/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: {
          header : '#4A55A2',
          background: '#C5DFF8',
          levels: '#7895CB',
          content1: '#A0BFE0',
        },
      },
    },
  },
  plugins: [],
}

