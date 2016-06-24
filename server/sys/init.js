'use strict'

const path = require('path')
const glob = require('glob')
const logger = require('koa-log4').getLogger('crash')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

process.on('uncaughtException', function (err) {
  logger.fatal(err)
  process.exit(1)
})

process.on('SIGTERM', function () {
  logger.info('Got SIGTERM...')
  process.exit(0)
})

var modelFiles = glob.sync('./../models/**.model.js')

modelFiles.forEach(function (modelFilePath) {
  require(path.resolve(modelFilePath))
})
