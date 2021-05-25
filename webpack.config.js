var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('html')
      .test(/\.html$/)
      .use('html-loader')
      .loader('html-loader')
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },

    
    //entry: "./src/scripts/app.js", //relative to root of the application
  //  output: {
     //   filename: "./dist/app.bundle.js" //relative to root of the application
   // },
    plugins: [
      new HtmlWebpackPlugin({
          hash: true,
          //title: 'My Awesome application',
          //myPageHeader: 'Hello World',
          template: './src/renderHtml.vue',
          filename: './src/assets/html/index.html' //relative to root of the application
      })
 ]

}