const mongoose = require('mongoose');

const { Schema } = mongoose;

const RateSchema = new Schema({
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
})

const CakeSchema = new Schema({
    cakeURL: { type: String, required: true },
    rating: [RateSchema],
    baker: { type: String, required: true }

}, {timestamps: true});

module.exports = {
    Cake: mongoose.model('Cake', CakeSchema),
    Rate: mongoose.model('Rate', RateSchema),
}