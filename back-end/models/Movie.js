const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Questions = new Schema({
  Easy: { type: Array, default: '' },
  Medium: { type: Array, default: '' },
  Difficult: { Array: Number }
});



mongoose.model('Questions', MovieSchema);
