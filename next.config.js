// next.config.js
const withCSS = require('@zeit/next-css');

module.exports = {
  withCSS: withCSS({
    cssLoaderOptions: {
      url: false,
    },
  }),
  url: 'http://ismail-esta-final-project.herokuapp.com/',
};
