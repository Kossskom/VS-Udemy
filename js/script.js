const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm1 = prompt('Один из последних просмотренных фильмов?');
const estimate1 = +prompt("На сколько оцените его?");
const lastFilm2 = prompt('Один из последних просмотренных фильмов?');
const estimate2 = +prompt("На сколько оцените его?");

personalMovieDB.movies[lastFilm1] = estimate1;
personalMovieDB.movies[lastFilm2] = estimate2;

console.log(personalMovieDB);


