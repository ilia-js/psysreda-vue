const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  devServer: {
    host: 'localhost'
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Татьяна Гвоздовская - гештальт-психотерапевт'
      return args
    })
  }
})
