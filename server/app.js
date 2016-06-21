'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('./sys/init');
require('./sys/log4js');

const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.db.uri, config.db.options);

require('./sys/koa')(app);

require('./routes')(app);

app.on('error',(err,ctx)=>{
	if (process.env.NODE_ENV != 'test') {
		console.error('error', err);
	}
});

app.listen(3000, function() {
    console.log('Koa server listening on port ' + 3000);
});

module.exports = app;
