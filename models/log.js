const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  task: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
  executedAt: Date
});

module.exports = mongoose.model('Log', LogSchema);
