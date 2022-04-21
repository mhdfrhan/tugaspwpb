module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./*.html",
    "./**/*.html",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "Poppins"
      },
      colors: {
        "orange": "#F9AF23",
        "red-custom": "#EF323D",
        "black": "#191919",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],
}