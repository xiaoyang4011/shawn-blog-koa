'use strict'

const app = require('../server/app')
const request = require('supertest')(app.listen())
const should = require('should')
const mongoose = require('mongoose')
const	Article = mongoose.model('Article')
const co = require('co')

describe('test/api/logs.test.js', function () {
  before(co.wrap(function *() {
    yield Article.create({
      title: 'test1241231',
      content: 'xxxxx',
      tag: '576ff30926d301c903ac25ed'
    })
  }))
  after(co.wrap(function * () {
    yield Article.remove()
  }))

  describe('get /logs/getLogsList', function () {
    it('should return logs list', function (done) {
      request.get('/test/get')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
          if (err) return done(err)

          res.body.data.title.should.be.equal('test1241231');

          console.log(res.body)
          done()
        })
    })
  })
})
