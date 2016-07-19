'use strict'

const app = require('../server/app')
const request = require('supertest')(app.listen())
const should = require('should')
const mongoose = require('mongoose')
const	HearthStone = mongoose.model('HearthStone')
const co = require('co')

describe('test/api/logs.test.js', function () {
  before(co.wrap(function *() {
    yield HearthStone.create({
      'id': 1,
      'name': '炎爆术',
      'card_id': 'EX1_279',
      'card_name': '炎爆术'
    })
  }))
  after(co.wrap(function * () {
    yield HearthStone.remove()
  }))

  describe('get card list', function () {
    it('should return one card', function (done) {
      request.get('/card/')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
          if (err) return done(err)

          let body = res.body

          body.data.length.should.be.equal(1)
          body.data[0].name.should.be.equal('炎爆术')

          done()
        })
    })
  })
})
