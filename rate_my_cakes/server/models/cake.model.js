const mongoose = require('mongoose');

const { Schema } = mongoose;
const CakeSchema = new Schema({
    cakeURL: { type: String, required: true },
    rating: [Number],
    baker: { type: String, required: true }

}, {timestamps: true});

module.exports = mongoose.model('Cake', CakeSchema);