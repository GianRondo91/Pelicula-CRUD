const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const filmSchema = {
    _id: ObjectId,
    title: String,
    genres: String
}

const FilmModel = mongoose.model('Film', filmSchema)

module.exports = FilmModel;