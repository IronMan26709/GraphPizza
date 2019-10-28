const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', proxy({
    target: "http://shop.asmer.fs.a-level.com.ua",
    changeOrigin: true,
  }));
};