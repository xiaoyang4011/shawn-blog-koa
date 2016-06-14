'use strict';

var path = require('path');
var glob = require('glob');

if (!process.env.NODE_ENV) {
	console.error('NODE_ENV 未定义! 使用默认的 development 环境变量');

	process.env.NODE_ENV = 'development';
}

require('./log4js');

/**
 * 监听进程退出事件
 */
var logger = require('log4js').getLogger('crash');

process.on('uncaughtException', function (err) {
	logger.fatal(err);

	process.exit(1);
});

process.on('SIGTERM', function () {
	logger.info('Got SIGTERM...');

	process.exit(0);
});

var modelFiles = glob.sync('./../server/models/**.model.js');

modelFiles.forEach(function (modelFilePath) {
	require(path.resolve(modelFilePath));
});