'use strict'

const mongoose = require('mongoose')
const User = mongoose.model('User')

exports.register = function * (ctx, next) {
  let user = yield User.create(ctx.request.body)

  ctx.session.user = user

  ctx.body = {status: 'success', data: user}
}
