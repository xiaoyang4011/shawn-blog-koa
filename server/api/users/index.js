'use strict'

const router = require('koa-router')()
const controller = require('./users.controller')
const co = require('co')

router.get('/register', co.wrap(controller.register))

module.exports = router
