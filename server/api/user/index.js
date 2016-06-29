'use strict'

const router = require('koa-router')()
const controller = require('./user.controller')
const co = require('co')

router.post('/register', co.wrap(controller.register))

module.exports = router
