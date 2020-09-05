const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
});

// exports template as constructor 'User'
module.exports = mongoose.model('Exercise', ExerciseSchema);