class FilmModel {
    id;
    title;
    genres;

    constructor(movie){
        this.id = movie.id;
        this.title = movie.title;
        this.genres = movie.genres;
    }
}

module.exports = FilmModel;