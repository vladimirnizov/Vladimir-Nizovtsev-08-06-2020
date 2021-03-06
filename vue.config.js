const Dotenv = require('dotenv-webpack');

module.exports = {
  publicPath: '/weatherapp/',
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    plugins: [
      new Dotenv()
    ],
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/main.scss";`
      }
    }
  }
}