/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        plusjakarta: ['Plus Jakarta Sans', 'sans-serif'],
        cabin: ['Cabin', 'sans-serif'],
        roboto: ['roboto', 'sans-serif']
      },
      colors: {
        ice: '#ECEFF8',
        primary: '#F5F5F5',
        texthover: '#DDD8D0',
        bg:  '#060B3B'
      },
      animation: {
          slide: "slide 2.5s linear infinite",
      },
      filter: ['hover', 'focus'],
      keyframes: {
        text: {
          to: {
            backgroundPosition: "200% center",
          },
        },
      },
    },
    screens: {
      'xxs': '350px',
      'xs': '475px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    backgroundImage: {
      'hero-bg': "url('../assets/bg.png')",
      'footerbg' : "url('../assets/footerbg.png')"
    }
  },
  plugins: [],
}

