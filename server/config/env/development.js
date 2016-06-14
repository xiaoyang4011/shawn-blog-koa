'use strict';

module.exports = {
	log: {
		logLevel: 'INFO',
		maxLogSize: 10485760,
		backups: 100,
		cwd: '/var/log/yunniao/',
		alwaysIncludePattern: true
	},
	db: {
		uri: 'mongodb://' + (process.env.DB_HOST_PORT || '127.0.0.1:27017') + '/beeper2',
		options: {
			user: '',
			pass: ''
		}
	}
};