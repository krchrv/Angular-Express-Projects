const mongoose = require('mongoose');

console.log('creating user model');

const { Schema } = mongoose;
const CakeSchema = new Schema({
    cakeURL: { type: String, required: true },
    rating: { type: Number, required: true },
    baker: { type: String, required: true }

}, {timestamps: true});

module.exports = mongoose.model('Cake', CakeSchema);