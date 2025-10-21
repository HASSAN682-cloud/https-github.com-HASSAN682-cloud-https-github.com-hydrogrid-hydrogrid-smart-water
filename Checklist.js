const mongoose = require('mongoose');

const checklistSchema = new mongoose.Schema({
  zone: String,
  technicianId: String,
  items: [
    {
      task: String,
      completed: Boolean
    }
  ],
  date: Date
});

module.exports = mongoose.model('Checklist', checklistSchema);
