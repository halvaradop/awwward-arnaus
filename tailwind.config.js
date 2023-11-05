import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      aspectRatio: {
        
      }
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('scroll', '&::-webkit-scrollbar'),
      addVariant('scroll-thumb', '&::-webkit-scrollbar-thumb'),
      addVariant('scroll-track', '&::-webkit-scrollbar-track')
    })
  ],
}

