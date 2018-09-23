// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../target/dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../target/dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/apii': {
        target: 'https://www.sojson.com',//设置你调用的接口域名和端口号 别忘了加http
        changeOrigin: true,
        pathRewrite: {
          '^/apii': ''
        }
      },
      '/dataTable':{
        target: 'http://10.6.0.101:8080',//设置你调用的接口域名和端口号 别忘了加http
        changeOrigin: true,
        pathRewrite: {
          '^/dataTable': ''
        }
      },
      '/iKnows':{
        target:'http://10.50.2.26:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/iKnows': ''
        }
      }
    }, 
    cssSourceMap: true
  }
}