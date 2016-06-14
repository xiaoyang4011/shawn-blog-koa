'use strict';

module.exports = {
	port: process.env.PORT || 3000,
	recluster: {
		pidFilePath: '/var/run/yunniao/'
	},
	log: {
		logLevel: 'INFO',
		maxLogSize: 10485760,
		backups: 100,
		cwd: '.',
		alwaysIncludePattern: true
	}
};
