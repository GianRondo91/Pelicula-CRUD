const Storage = require('../storage/filmStorage');

class FilmController {

    filmStorage;

    constructor(){
        this.filmStorage = new Storage();
    }

    

    async create(film) {
        await this.filmStorage.create(film);
        return film.id_Film;
    }

    async get(id){
        return await this.filmStorage.findById(id);
    }

    async get(id){
        return await this.filmStorage.deleteById(id);
    }

    async get(id){
        return await this.filmStorage.update(id);
    }
}

let filmController = new FilmController();
module.exports = filmController;