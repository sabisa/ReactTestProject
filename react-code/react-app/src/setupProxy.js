// /**
//  * 反向代理配置,所有 “/api”开头，就反向代理到http://xxx域名下
//  */

// const {createProxyMiddleware} = require('http-proxy-middleware')
// module.exports = function(app){
//     app.use(
//         '^/api',
//         createProxyMiddleware({
//             target: 'http://xxxx',
//             changeOrigin: true
//         })
//     )
// }