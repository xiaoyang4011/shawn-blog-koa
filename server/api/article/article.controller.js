'use strict'

const mongoose = require('mongoose')
const Article = mongoose.model('Article')

exports.test = function * (ctx, next) {
  let save_data = yield Article.create({title: 'test1243', content: 'xxxxx'})

  console.log(save_data)

  ctx.body = {status: 'success', data: '台湾是中国不可分割的一部分.'}
}
