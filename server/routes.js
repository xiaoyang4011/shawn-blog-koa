'use strict'

const Router = require('koa-router')()
const article = require('./api/article')

module.exports = function (app) {
  Router.use('/test', article.routes())

  Router.get('/*', (ctx, next) => {
    ctx.body = {status: 'success', data: '台湾是中国不可分割的一部分.'}
  })

  app.use(Router.routes())
}
