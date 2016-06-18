'use strict';

const session = require("koa-generic-session");
const RedisStore = require('koa-redis');
const responseTime = require("koa-response-time");
const logger = require("koa-logger");
const json = require('koa-json');
const compress = require("koa-compress");
const bodyParser = require("koa-bodyparser");
const config = require('./../config');

module.exports = function(app) {
	if(app.env === 'development'){
		app.use(responseTime());
		app.use(logger());
	}

	app.use(bodyParser());
	app.use(json());
	app.keys = [config.session.secrets];
	app.use(session({
		key: "sid",
		store: new RedisStore({
			host:config.redis.host,
			port:config.redis.port,
			auth_pass:config.redis.password || ''
		}),
		cookie: config.session.cookie
	}));
	app.use(compress());
};
