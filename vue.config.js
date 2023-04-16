const path = require('path');

module.exports = {
  outputDir: 'dist',
  publicPath: '/',
  chainWebpack: config => {
    config
      .plugin('copy')
      .tap(([options]) => {
        options[0].patterns.push({
          from: path.resolve(__dirname, 'CNAME'),
          to: path.resolve(__dirname, 'dist')
        });
        return [options];
      });
  }
};
