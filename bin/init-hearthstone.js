require(require('path').resolve('./server/models/hearthstone.model.js'))

const mongoose = require('mongoose')
const HearthStone = mongoose.model('HearthStone')
const HearthStoneData = require('./data/hearthstone')
const _ = require('lodash')
const config = require('./../server/config')
const co = require('co')

mongoose.connect(config.db.uri, config.db.options)

co(function * main () {
  for (let i = 0; i < HearthStoneData.data.length; i++) {
    let card = yield HearthStone.create(_.omit(HearthStoneData.data[i], '_id'))
    console.log(card.name)
    console.log('-----------------')
  }
}).then(function () {
  console.log('All Done!')
  process.exit(0)
})
