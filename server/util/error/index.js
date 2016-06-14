'use strict';

const _ = require('lodash');
const logger = require('log4js').getLogger('access');

function errorHandleMiddle() {
	return function *(ctx, next) {
		try {
			yield next;
		} catch (err) {
			ctx.status = err.status || 500;

			logger.error('**********************************************');
			logger.error(err);
			logger.info('query:', req.query);
			logger.info('body:', req.body);
			logger.error('**********************************************');

			ctx.body = {code: 1, msg: err.message};
		}
	}
}

module.exports = errorHandleMiddle;