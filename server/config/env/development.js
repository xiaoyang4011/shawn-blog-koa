'use strict'

module.exports = {
  log: {
    logLevel: 'INFO',
    maxLogSize: 10485760,
    backups: 100,
    cwd: '/var/log/yunniao/',
    alwaysIncludePattern: true
  },
  db: {
    uri: 'mongodb://' + (process.env.DB_HOST_PORT || '127.0.0.1:27017') + '/shawn_blog',
    options: {
      user: '',
      pass: ''
    }
  },
  session: {
    cookie: {maxage: 5000}
  }
}
