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

const QuestionSchema = new mongoose.Schema({
  text: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  answers: [AnswerSchema]
});

module.exports = mongoose.model('Question', QuestionSchema);