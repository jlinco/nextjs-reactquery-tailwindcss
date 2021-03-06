module.exports = {
  purge: ['./pages/**/*.{js.ts.jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('../public/pattern-randomized.svg')"
      }
    },
    fontFamily: {
      // comfortaa: ['Comfortaa', 'sans-serif'],
      quickSand: ['Quicksand', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
