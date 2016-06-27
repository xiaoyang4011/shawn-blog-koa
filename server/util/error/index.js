'use strict'

const logger = require('log4js').getLogger('access')

function errorHandleMiddle () {
  return function * (ctx, next) {
    try {
      yield next
    } catch (err) {
      ctx.status = err.status || 500

      logger.error('**********************************************')
      logger.error(err)
      logger.info('ctx:', ctx)
      logger.error('**********************************************')

      ctx.body = {code: 1, msg: err.message}
    }
  }
}

module.exports = errorHandleMiddle
