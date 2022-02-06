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
          'darked-primary': "#4d56e0",
          'gray': "#fafafa"
        }
      }
    },
  },
  plugins: [
    require('postcss-import')
  ],
}
