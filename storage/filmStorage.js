const { Film } = require('./storage');

class FilmStorage { 

    constructor() {
        console.log('Se ha creado una instancia de FilmStorage');
    }

    async findById(id) {
        const film = await Film.findById(id)
            .exec();
        return film;
    };

    async update(orderModel) {
        let film = new Film(orderModel);
        film._id = filmModel.id;
        await film.save();
    };

    async deleteById(id) {
        return await Film.deleteById(id);
    };

    async create(orderModel) {
        let film = new Film(filmModel);
        film = await film.save();
        filmModel.id = film._id;
    };

    async get() {
        return await Film.find();
    };
};

module.exports = FilmStorage;