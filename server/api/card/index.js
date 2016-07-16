'use strict'

const router = require('koa-router')()
const controller = require('./card.controller')
const co = require('co')

router.get('/', co.wrap(controller.getList))

module.exports = router
