'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let HearthStone = new Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String
  },
  card_id: {
    type: String
  },
  card_name: {
    type: String
  },
  card_set: {
    type: Number
  },
  card_type: {
    type: Number
  },
  class: Number,
  rarity: Number,
  cost: Number,
  atk: Number,
  health: Number,
  race: Number,
  decomposition: {
    type: String
  },
  synthesis: {
    type: String
  },
  taunt: Number,
  freeze: Number,
  windfury: Number,
  battlecry: Number,
  stealth: Number,
  combo: Number,
  aura: Number,
  charge: Number,
  grant_charge: Number,
  spellpower: Number,
  silence: Number,
  enrage: Number,
  divine_shield: Number,
  deathrattle: Number,
  secret: Number,
  inspire: Number
})

HearthStone.virtual('info').get(function () {
  return {
    id: this.id,
    name: this.name,
    card_id: this.card_id,
    card_name: this.card_name,
    card_set: this.card_set,
    card_type: this.card_type,
    class: this.class,
    rarity: this.rarity,
    cost: this.cost,
    atk: this.atk,
    health: this.health,
    race: this.race,
    decomposition: this.decomposition,
    synthesis: this.synthesis,
    img: 'http://i1.17173cdn.com/8hpoty/YWxqaGBf/images/resource/new_middler/' + this.card_id + '.png'
  }
})

module.exports = mongoose.model('HearthStone', HearthStone)
