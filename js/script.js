
let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i = 0; i <= 1; i++) {
        const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
        if (lastFilm != "" && lastFilm != null && lastFilm.length < 50) {
            for (let i = 0; i <= 0; i++){
                const rating = +prompt("На сколько оцените его?", '');
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
}

// rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log('Просмотренно довольно мало фильмов');
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log('Вы класический зритель');
    }else if(personalMovieDB.count >= 30){
        console.log('Вы киноман');
    }else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i=1; i<= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
