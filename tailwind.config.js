module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'top-bg': "url('../imgs/topbg.jpg')",
        'hero-bg': "url('../imgs/herobg.jpg')",
        'cost-bg': "url('../imgs/costbg.svg')",
        'getStart-bg': "url('../imgs/justClickbg.svg')",
        'girlimg': "url('../imgs/tm-girl.jpg')",
        'wavesbg': "url('../imgs/waves.svg')",
    }),

    colors: {

      'primary-one': '#97497b', //purple
        'primary-two': '#e65a43', //orange

    }

    },
  },
  plugins: [],
}
