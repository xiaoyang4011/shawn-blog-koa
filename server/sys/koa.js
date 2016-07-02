'use strict'

const session = require('koa-generic-session')
const RedisStore = require('koa-redis')
const responseTime = require('koa-response-time')
const logger = require('koa-logger')
const json = require('koa-json')
const compress = require('koa-compress')
const bodyParser = require('koa-bodyparser')
const log4js = require('koa-log4')
const convert = require('koa-convert')
const config = require('./../config')

module.exports = function (app) {
  app.use(responseTime())
  app.use(logger())
  app.use(log4js.koaLogger(log4js.getLogger('http'), { level: 'auto' }))
  app.use(bodyParser())
  app.use(json())
  app.keys = [config.secrets]
  app.use(convert(session({
    key: 'sid',
    store: new RedisStore({
      host: config.redis.host,
      port: config.redis.port,
      auth_pass: config.redis.password || ''
    }),
    cookie: config.session.cookie
  })))
  app.use(compress())
}
