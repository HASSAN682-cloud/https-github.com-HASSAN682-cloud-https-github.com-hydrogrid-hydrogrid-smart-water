const mongoose = require('mongoose');

const technicianSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: { type: String, enum: ['admin', 'technician'], default: 'technician' }
});

module.exports = mongoose.model('Technician', technicianSchema);
