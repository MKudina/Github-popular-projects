/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        'main-text': '#f0f6fc',
        'secondary-text': '#9198a1',
        'main-bg': '#0d1117',
        'secondary-bg': '#212830',
        'header-bg': '#010409',
        'counter-bg': '#2f3742',
        'main-border': '#3d444d',
        'languageColor': '#3178c6',
      },
    },
  },
  plugins: [],
}

