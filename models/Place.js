const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['coffee_shop', 'bookstore']
    }},
    {timestamps: { createdAt: 'created_at' }}
);

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;

