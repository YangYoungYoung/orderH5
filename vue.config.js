const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = {
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