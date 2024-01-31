/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lab-digital': ['LAB디지털', 'sans-serif'], // 'LAB디지털'과 fallback 폰트
        'DNFBitBitv2': ['DNFBitBitv2', 'sans-serif']
      },
    },
  },
  plugins: [],
}