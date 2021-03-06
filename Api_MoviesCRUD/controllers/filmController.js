const Storage = require('../storage/filmStorage');

class FilmController {

    filmStorage;

    constructor(){
        this.filmStorage = new Storage();
    }

    async create(film) {
        await this.filmStorage.create(film);
        return film._id;
    }

    async get(id){
        return await this.filmStorage.findById(id);
    }

    async delete(id){
        return await this.filmStorage.deleteById(id);
    }

    async update(id, film){
        return await this.filmStorage.update(id, film);
    }
}

let filmController = new FilmController();
module.exports = filmController;