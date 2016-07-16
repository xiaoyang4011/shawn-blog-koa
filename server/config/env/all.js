'use strict'

module.exports = {
  port: process.env.PORT || 3000,
  log: {
    logLevel: 'INFO',
    maxLogSize: 10485760,
    backups: 100,
    cwd: '.',
    alwaysIncludePattern: true
  },
  secrets: 'lxy',
  redis: {
    host: '127.0.0.1',
    port: 6379
  }
}
