const Film = require('../models/filmModel');

class FilmStorage { 

    constructor() {
        console.log('Se ha creado una instancia de FilmStorage');
    }

    async findById(id) {
        const film = await Film.findById(id)
            .exec();
        return film;
    };

    async update(id, film) {
        await Film.findOneAndUpdate(id, film);
    };

    async deleteById(id) {
        return await Film.findByIdAndRemove(id);
    };

    async create(film) {
        await film.save();
    };

    async get() {
        return await Film.find();
    };
};

module.exports = FilmStorage;