"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фльмов вы уже посмотрели", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фльмов вы уже посмотрели", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Один изпоследних просмотренных фильмов?"),
      b = prompt("На сколько оцените его?");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотренно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 20) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 20) {
    console.log("Вы киноман");
  } else {
    console.log("Ошибка");
  }
}

detectPersonalLevel();

function ahowMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}

function writeYourGenser() {
  for (let i = 1; i <= 3; i++) {
    let yourGenseres = prompt(`Ваш любимый жанр под номером ${i}`);
    if (yourGenseres != "" && yourGenseres != null) {
      personalMovieDB.genres.push(yourGenseres);
    }else{
        i--;
    }
  }
}
writeYourGenser();

ahowMyDB();