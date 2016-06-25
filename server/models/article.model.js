'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ArticleSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  }
})

module.exports = mongoose.model('Article', ArticleSchema)
