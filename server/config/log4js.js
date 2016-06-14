'use strict';

var fs = require('fs');
var _ = require('lodash');
var log4js = require('log4js');
var logConfig = require('./config').log;

var appenders = [
	{
		type: 'dateFile',
		level: 'INFO',
		filename: 'access',
		pattern: '_yyyyMMdd.log',
		alwaysIncludePattern: logConfig.alwaysIncludePattern,
		maxLogSize: logConfig.maxLogSize,
		backups: 1,
		category: 'access'
	},
	{
		type: 'dateFile',
		level: 'INFO',
		filename: 'crash',
		pattern: '_yyyyMMdd.log',
		alwaysIncludePattern: logConfig.alwaysIncludePattern,
		maxLogSize: logConfig.maxLogSize,
		backups: logConfig.backups,
		category: 'crash'
	},
	{
		type: 'dateFile',
		level: logConfig.logLevel,
		filename: 'app',
		pattern: '_yyyyMMdd.log',
		alwaysIncludePattern: logConfig.alwaysIncludePattern,
		maxLogSize: logConfig.maxLogSize,
		backups: logConfig.backups,
		category: 'app'
	}
];

if (process.env.NODE_ENV !== 'unittesting') {
	appenders.push({
		type: 'console',
		level: logConfig.logLevel
	});
}

try {
	fs.mkdirSync(logConfig.cwd);
} catch (e) {
	if (!_.startsWith(e.message, 'EEXIST')) throw e;
}

log4js.configure({
	appenders: appenders
}, {cwd: logConfig.cwd});
