'use strict'
// init app
require('./sys/init')

const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const config = require('./config')

mongoose.connect(config.db.uri, config.db.options)

require('./sys/koa')(app)
require('./routes')(app)

app.on('error', (err, ctx) => {
  console.error('error', err)
})

// Start server
app.listen(3500, function () {
  console.log('Koa server listening on port ' + 3500)
})

module.exports = app
