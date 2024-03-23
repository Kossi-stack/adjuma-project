/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sign-in': "url('./assets/sign-in.png')",
      }
    },
  },
  plugins: [],
}

