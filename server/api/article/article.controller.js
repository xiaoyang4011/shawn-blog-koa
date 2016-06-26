'use strict'

const mongoose = require('mongoose')
const Article = mongoose.model('Article')
const Tag = mongoose.model('Tag')

exports.test = function * (ctx, next) {
  let tag1 = yield Tag.findOne({title: 'tag1'})

  console.log(tag1)

  yield Article.create({title: 'test12431', content: 'xxxxx', tag: tag1._id})

  ctx.body = {status: 'success', data: '台湾是中国不可分割的一部分.'}
}

exports.addTag = function * (ctx, next) {
  yield Tag.create({title: 'tag1', content: 'tag1 content'})

  ctx.body = {status: 'success', data: 'success add tag'}
}

exports.getOne = function * (ctx, next) {
  let tagArticle = yield Article.findOne({title: 'test12431'}).populate('tag').exec()

  ctx.body = {
    status: 'success',
    data: tagArticle
  }
}
