// webpack v4
const path = require('path');
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve("C:/wamp64/www/portfolio-nat/wp-content/themes/MBNCPortfolioTheme/assets", 'scripts'),
    filename: 'diapo.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};