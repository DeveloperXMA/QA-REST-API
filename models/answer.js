const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
  text: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  votes: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('Answer', AnswerSchema);