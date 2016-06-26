'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TagSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  }
})

module.exports = mongoose.model('Tag', TagSchema)
