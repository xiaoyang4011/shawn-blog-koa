'use strict';

var _ = require('lodash');

/**
 * Load app configurations
 */
module.exports = _.assign(
	require('./env/all'),
	require('./env/' + process.env.NODE_ENV) || {}
);