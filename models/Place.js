const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['coffee_shop', 'bookstore']
    },
    location: {
      coordinates: [
        {
          type: Number,
          min: -180,
          max: 180
        }
      ],
      type: {
        type: String,
        default: 'Point',
        required: true
      }
    }
  },
  { timestamps: { createdAt: 'created_at' } }
);

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
