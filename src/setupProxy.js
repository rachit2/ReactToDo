// const proxy = require("http-proxy-middleware");

// module.exports = app => {
//   app.use(proxy("/api/*", { target: "https://to-do-lists001.herokuapp.com/" }));
// };

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/*',
    createProxyMiddleware({
      target: 'https://node-backend-to-do.herokuapp.com',
      changeOrigin: true,
    })
  );
};