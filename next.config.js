// next.config.js
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
  },
});

//not entirely sure what this page is doing but I saw online that it might be necessary for importing CSS files?
//Link here: https://stackoverflow.com/questions/50149729/next-js-import-css-file-does-not-work
//Once we tackle the CSS we can probs see if this page is needed or not
