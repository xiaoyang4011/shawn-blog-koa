'use strict'

const router = require('koa-router')()
const controller = require('./article.controller')
const co = require('co')

router.get('/test', co.wrap(controller.test))

module.exports = router
