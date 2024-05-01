/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "comfortGrid": 'box-shadow: 0px 4px 50px 0px  #BCEF30'
      },
      colors: {
        electricGreen: '#BCEF30',
        customGray: '#C0C0C0',
        cardBackground: '#171826',

      },

      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle farthest-side, #D782FF, #090A18)',
        'radial-gradient-product': 'radial-gradient(circle farthest-side, #D782FF, #171826)',
        'rainbow-gradient-top-half': 'radial-gradient(circle farthest-side at top, #171826, #D782FF); radial-gradient(circle farthest-side at bottom, #171826, #D782FF)',
        // 'rainbow-gradient-bottom-half': '',
      },

    },
  },
  plugins: [],
}