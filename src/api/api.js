let TMDBTopRatting = undefined;
let specificMovie = undefined;
let omdb = undefined;
class API {
  static getTMDBTopRatting(page) {
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=a341a9d7cb2bd4eba1b729d6e957cbf9&page=${page}`
    ).then((response) => response.json());
    // api Example, single movie req i'll read the doc for more
  }

  static getSpecificMovie(movieId) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a341a9d7cb2bd4eba1b729d6e957cbf9`)
      .then(
        (specificMovie) => specificMovie.json()
      );
    }


  static getOMDB(imdbID) {
    if (!omdb) {
      omdb = fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=40e4e39d`).then(
        (omdbResponse) => omdbResponse.json()
      );
    }
    return omdb;
    //OMDF is the most complete on this, have scores from rotten, metacritic and imdb
  }
} // call others API here
// https://api.thetvdb.com/swagger

export default API;
