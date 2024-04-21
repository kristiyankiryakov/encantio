/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electricGreen: '#BCEF30',
        customGray: '#C0C0C0',
        cardBackground: '#171826',
      },

      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle farthest-side, #D782FF, #090A18)',
        'radial-gradient-product': 'radial-gradient(circle farthest-side, #D782FF, #171826)',
      },

    },
  },
  plugins: [],
}