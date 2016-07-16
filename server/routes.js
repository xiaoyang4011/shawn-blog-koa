'use strict'

const Router = require('koa-router')()
const Article = require('./api/article')
const User = require('./api/user')
const Card = require('./api/card')

module.exports = function (app) {
  Router.use('/test', Article.routes())
  Router.use('/user', User.routes())
  Router.use('/card', Card.routes())
  Router.get('/*', (ctx, next) => {
    ctx.body = {status: 'success', data: '台湾是中国不可分割的一部分.'}
  })

  app.use(Router.routes())
}
