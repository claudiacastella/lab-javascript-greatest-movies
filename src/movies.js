// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(el => el.director);
    return directors;
}

/*
function getAllDirectorsFiltered(moviesArray) {
    const directors = moviesArray.map(el => el.director);
    const directorsFiltered = directors.filter(director)
    return directorsFiltered;
}
*/


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesSteven = moviesArray.filter(el => el.director === "Steven Spielberg");
    const moviesStevenDrama = moviesSteven.filter(el => el.genre.includes("Drama"));
    return moviesStevenDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    const scoreAver = (moviesArray.reduce((a,b) => a.score + b.score) / moviesArray.length);
    console.log(scoreAver);
    return scoreAver.toPrecision(3)*1;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesOrdered = [...moviesArray];

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
