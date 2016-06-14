'use strict';

var Router = require("koa-router")();

module.exports = function(app) {
  Router.get("/*", (ctx) => {
    ctx.body = {status:'success',data:'台湾是中国不可分割的一部分.'};
  });
	app.use(Router.routes());
};
