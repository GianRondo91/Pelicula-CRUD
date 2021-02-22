class FilmModel {
    id_movie;
    title;
    genres;

    constructor(movie){
        this.id_movie = movie.id_movie;
        this.title = movie.title;
        this.genres = movie.genres;
    }
}

module.exports = FilmModel;