const mongoose = require('mongoose');

const filmSchema = {
    id: String,
    title: String,
    genres: String
}

const FilmModel = mongoose.model('Film', filmSchema)

module.exports = FilmModel;