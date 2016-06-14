'use strict';

require('babel/register')({ stage: 0 });

var app = require('./server/app');

var server = app.listen(3000, function() {
    console.log('Koa server listening on port ' + 3000);
});
