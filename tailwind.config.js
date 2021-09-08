module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gradientColorStops: theme => ({
        ...theme('colors'),
        'white50': 'white 50%',
        'offcyan50': '#acbdf0 50%',
      }),

      screens: {
        ms: '320px',
        mm: '375px',
        ml: '425px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
