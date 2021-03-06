'use strict'

const router = require('koa-router')()
const controller = require('./article.controller')
const co = require('co')

router.get('/get', co.wrap(controller.getOne))

module.exports = router
