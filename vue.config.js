const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  outputDir: 'dist',
  publicPath: '/',
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'CNAME'),
            to: path.resolve(__dirname, 'dist')
          }
        ]
      })
    ]
  }
};
