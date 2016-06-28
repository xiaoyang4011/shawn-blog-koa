'use strict'

module.exports = {
  log: {
    logLevel: 'INFO',
    maxLogSize: 10485760,
    backups: 100,
    cwd: '.',
    alwaysIncludePattern: true
  },
  db: {
    uri: 'mongodb://' + (process.env.DB_HOST_PORT || '127.0.0.1:27017') + '/shawn_blog_test',
    options: {
      user: '',
      pass: ''
    }
  }
}
