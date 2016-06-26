'use strict'

const router = require('koa-router')()
const controller = require('./article.controller')
const co = require('co')

router.get('/test', co.wrap(controller.test))
router.get('/tag', co.wrap(controller.addTag))
router.get('/get', co.wrap(controller.getOne))

module.exports = router
