const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  colors: [{ label: String, value: String }],
  radius: [{ label: String, value: String }],
  spacing: [{ label: String, value: String }],
});

module.exports = mongoose.model('Project', ProjectSchema);
