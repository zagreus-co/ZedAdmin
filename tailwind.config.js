module.exports = {
  content: [
    "*.html",
    "./pages/*.html",
    "./pages/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('postcss-import')
  ],
}
