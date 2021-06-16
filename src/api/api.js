let myHeaders = new Headers({
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "text/plain",
  "mode":"no-cors",
  "Access-Control-Allow-Methods": "GET"})

class API {
  static getTMDBTopRatting(page) {
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=a341a9d7cb2bd4eba1b729d6e957cbf9&page=${page}`
    ).then((response) => response.json());
  }

  static getSpecificMovie(movieId) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a341a9d7cb2bd4eba1b729d6e957cbf9`
    ).then((specificMovie) => specificMovie.json());
    // api Example, single movie req i'll read the doc for more
  }

  static getOMDB(imdbID) {
    return fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=40e4e39d`, myHeaders).then(
      (omdbResponse) => omdbResponse.json()
    );

    //OMDF is the most complete on this, have scores from rotten, metacritic and imdb
  }
} // call others API here
// https://api.thetvdb.com/swagger

export default API;
