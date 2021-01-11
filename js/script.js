const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
if (personalMovieDB.count < 10){
    alert('Просмотренно довольно мало фильмов');
}else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    alert('Вы класический зритель');
}else if(personalMovieDB.count >= 30){
    alert('Вы киноман');
}else {
    alert('Произошла ошибка');
}

let lastFilm = [];
let rating = [];

for (let i = 0; i <= 1; i++) {
    lastFilm = prompt('Один из последних просмотренных фильмов?', '');
    if (lastFilm != "" && lastFilm != null && lastFilm.length < 50) {
        for (let i = 0; i <= 0; i++){
            rating = +prompt("На сколько оцените его?", '');
            if (rating != 0 && rating != null && rating == Number(rating)) {
                personalMovieDB.movies[lastFilm] = rating;
                console.log(rating);
            }else{
                --i;
            }
        }
    } else {
        console.log('error');
        --i;
    }
}



console.log(personalMovieDB);