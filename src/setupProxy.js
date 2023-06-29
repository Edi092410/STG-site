const { createProxyMiddleware } = require("http-proxy-middleware");
// Proxy middleware нь package.json дээр endpoint-Н мэдээллийг бичихгүй server
// болон client-н proxy болдог. Энэ нь 1-с олон api ашиглахад хэрэг болдог.
// setupProxy.js file нь src дотор байрладаг. (src/setupProxy.js)
module.exports = (app) => {
  app.use(
    "/api/login",
    createProxyMiddleware({
      target: "http://stgsite.mn",
      changeOrigin: true,
      // secure: false,
    })
  );

  app.use(
    ["/api/users", "/api/services"],
    createProxyMiddleware({
      target: "https://service2.stg.mn",
      changeOrigin: true,
      secure: false, //it typically refers to the secure flag in the HTTP cookie. This flag determines whether the cookie should only be sent over secure (HTTPS) connections or also over non-secure (HTTP) connections.
    })
  );

  app.use(
    ["/api/services"],
    createProxyMiddleware({
      target: "https://service2.stg.mn",
      changeOrigin: true,
      secure: false, //it typically refers to the secure flag in the HTTP cookie. This flag determines whether the cookie should only be sent over secure (HTTPS) connections or also over non-secure (HTTP) connections.
    })
  );
};
