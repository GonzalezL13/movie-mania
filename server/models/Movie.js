const { Schema } = require('mongoose');

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
    },
    plot: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    }
});

module.exports = movieSchema;