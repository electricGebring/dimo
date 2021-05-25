module.exports = {
    devServer: {
      proxy: 'http://localhost:3001'
    },
    chainWebpack: config => {
      config.module
        .rule('html')
        .test(/\.html$/)
        .use('html-loader')
        .loader('html-loader')
    },

  }