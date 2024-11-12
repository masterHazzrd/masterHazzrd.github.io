const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['short-term', 'mid-term', 'long-term'], // Goal category
    required: true,
  },
  completed: {
    type: Boolean,
    default: false, // Completion status
  },
});

module.exports = mongoose.model('Task', TaskSchema);
