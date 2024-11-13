/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
        '20%' : '20%',
      },
      dropShadow: {
        '3xl': '3px 3px 1px rgba(255, 255, 255,.5)',
        '4xl': [
            '20px 35px 35px rgba(255, 255, 255,1)',
            '20px 45px 65px rgba(255, 255, 255,1)'
        ]
      },
    },
  },
  plugins: [],
}

