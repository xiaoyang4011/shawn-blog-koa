'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var log4js = require('log4js');
var logger = require('log4js').getLogger('access');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(log4js.connectLogger(logger, {
	level: 'INFO',
	format: ':remote-addr - -' +
	' ":method :url HTTP/:http-version"' +
	' :status :content-length ":referrer"' +
	' ":user-agent" ":response-time"'
}));

require('./../routes')(app);

app.use(function (err, req, res, next) {
	if (!err) return next();

	logger.error('**********************************************');
	logger.error(err);
	logger.info('query:', req.query);
	logger.info('body:', req.body);
	logger.error('**********************************************');

	res.json({
		code: 1,
		msg: err.message
	});
});

app.use(function (req, res) {
	res.status(404).json({
		code: 1,
		msg: 'Not Found'
	});
});

module.exports =  app;