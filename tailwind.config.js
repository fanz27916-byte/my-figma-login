/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '585': '585px',
        '690': '690px',
        '440': '440px',
        '312': '312px',
        '131': '131px',
        '136': '136px',
        '137': '137px',
        '46': '46px',
        '59': '59px',
        '48': '48px',
      },
      fontSize: {
        '30': '30px',
        '18': '18px',
        '16': '16px',
        '14': '14px',
        '12': '12px',
      },
      lineHeight: {
        '36.31': '36.31px',
        '23.4': '23.4px',
        '20.8': '20.8px',
        '19.36': '19.36px',
      },
    },
  },
  plugins: [],
}