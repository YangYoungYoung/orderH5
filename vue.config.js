const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = {
    //axios域代理，解决axios跨域问题
    baseUrl: '/',
    devServer: {
        proxy: {
            '': {
                target: 'http://192.168.0.108:8090',
                changeOrigin: true,
                ws: true,
                pathRewrite: {

                }
            }
        }
    },
    //...其他配置
  css: {
   loaderOptions: {
    postcss: {
     plugins: [
      require('postcss-pxtorem')({
       rootValue: 37.5,
       minPixelValue: 2,
       propList: ['*'],
      })
     ]
    }
   }
  },
}