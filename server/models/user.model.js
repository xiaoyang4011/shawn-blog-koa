'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  },
  st: {
    type: Number,
    default: 0
  },
  cts: {
    type: Date,
    required: true,
    default: Date.now
  },
  pts: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('User', UserSchema)
