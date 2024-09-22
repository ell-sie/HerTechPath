/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'custom-full-screen': 'calc(100vh - 4rem)',
      },
      colors: {
        primary: {
          100: '#F5F5F7',
        },
        accent: {
          800: '#ffbf00',
          400: '#ffdf1b',
          200: '#fff885',
          100: '#fffbc5',
          50: '#ffffea',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
