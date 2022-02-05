module.exports = {
  content: [
    "*.html",
    "./pages/*.html",
    "./pages/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          'secondary': "#f8f9ff",
          'primary': "#5c68ff",
        }
      }
    },
  },
  plugins: [
    require('postcss-import')
  ],
}
