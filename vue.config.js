module.exports = {
  devServer: {
    // 字符串模式 开发中,项目所有的请求,都会代理到这个地址.
    // proxy: 'https://m.maizuo.com'
    // 对象模式 只对你配置的key开头的请求 做代理
    // PS: 你在浏览器访问的地址 和你的中间层代理服务器要是同源的
    proxy: {
      '/api': {
        target: 'https://m.maizuo.com',
        // 重写地址
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
