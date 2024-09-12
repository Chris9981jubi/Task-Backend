const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  schedule: String
});

module.exports = mongoose.model('Task', TaskSchema);
