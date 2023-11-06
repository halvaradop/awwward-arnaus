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
      colors: {
        gray: {
          DEFAULT: '#9F9F9F',
          100: '#4E4E4E'
        }
      },
      animation: {
        marquee: "marquee 6s linear infinite 0s"
      },
      keyframes: {
        marquee: {
          "0%": {
            translate: "100%"
          },
          "100%": {
            translate: "-100%"
          }
        }
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

