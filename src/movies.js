// const movies = require('./data')
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((el) => el.director);
  return directors;
}

/*
function getAllDirectorsFiltered(moviesArray) {
    const directors = moviesArray.map(el => el.director);
    const result = []
    moviesArray.forEach((movie) => {
        if ()
    })
    return directorsFiltered;
}
*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const moviesSteven = moviesArray.filter(
    (el) => el.director === "Steven Spielberg"
  );
  const moviesStevenDrama = moviesSteven.filter((el) =>
    el.genre.includes("Drama")
  );
  return moviesStevenDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const scoreAver =
    moviesArray.reduce((a, b) => a.score + b.score) / moviesArray.length; // aqui habríamos filtrado con un if para los strings vacíos. 
  return scoreAver.toPrecision(3) * 1;
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const moviesDrama = moviesArray.filter((el) => el.genre.includes("Drama"));
  const scoresDrama = moviesDrama.map((el) => el.score);
  if (scoresDrama.length === 0) return 0;
  else if (moviesDrama.length === 1) return scoresDrama[0];
  else if (moviesDrama.length > 1) {
    const sumScoreDrama = scoresDrama.reduce((a, b) => a + b) * 1;
    const scoreDramaAver = sumScoreDrama / moviesDrama.length;
    return scoreDramaAver.toPrecision(3) * 1;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = [...moviesArray];
  const moviesPerYear = moviesCopy.sort((a, b) => a.year - b.year);

  return moviesPerYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
/*function orderAlphabetically(moviesArray) {
  const moviesCopy = [...moviesArray];
  const moviesPerTitle = moviesCopy.map((el) => el.title);
  moviesPerTitle.sort();
  const moviesTop = moviesPerTitle.slice(0, 20);
  return moviesTop;
}
*/
function orderAlphabetically(moviesArray) {
    return [...moviesArray].map((el) => el.title).sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function myFunction(x) {
  let totalMinutes = 0;
  if (x.includes("h")) {
    let i = x.indexOf("h");
    totalMinutes += x[i - 1] * 60;
  };
  if (x.includes("min")) {
    let i = x.indexOf("m");
    totalMinutes += x.slice([i - 2], [i - 1]) * 1;
  };
  return totalMinutes;
}

function turnHoursToMinutes(moviesArray) {
  const moviesCopy = [...moviesArray];
  const moviesMinutes = moviesCopy.map((el) => {
    return {
      title: el.title,
      year: el.year,
      director: el.director,
      duration: myFunction(el.duration),
      genre: el.genre,
      score: el.score,
    };
  });
  return moviesMinutes;
}

turnHoursToMinutes(movies);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;
    const scores = [{year: moviesArray.year, score: moviesArray.score}]
    console.log(scores);



    return `The best year was <YEAR> with an average score of <RATE>`;
}
