'use strict'

const mongoose = require('mongoose')
const HearthStone = mongoose.model('HearthStone')
const _ = require('lodash')
const PERPAGE = 10

exports.getList = function * (ctx, next) {
  let page = ctx.query.page || 1

  let list = yield HearthStone.find().limit(PERPAGE).skip((page - 1) * PERPAGE)

  ctx.body = {status: 'success', data: _.map(list, 'info')}
}
