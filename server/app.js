'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');
const config = require('./config/env');

mongoose.connect(config.mongo.uri, config.mongo.options);

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

require('./routes')(app);

app.on('error',(err,ctx)=>{
	if (process.env.NODE_ENV != 'test') {
		console.error('error', err);
	}
});

app.listen(config.port, function () {
  console.log('server listening on %d, in %s mode', config.port, app.env);
});
