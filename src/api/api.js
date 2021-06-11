let tmdb = undefined;
let omdb = undefined;
class API {
  static getTMDB() {
    if (!tmdb) {
      tmdb = fetch(
        "https://api.themoviedb.org/3/movie/550?api_key=a341a9d7cb2bd4eba1b729d6e957cbf9")
        .then((response) => response.json());
        // api Example, single movie req i'll read the doc for more
    }
    return tmdb
  }

  static getOMDB() {
    if (!omdb) {
      omdb = fetch("http://www.omdbapi.com/?i=tt3896198&apikey=40e4e39d")
      .then((omdbResponse) => omdbResponse.json())
    }
    return omdb
        //OMDF is the most complete on this, have scores from rotten, metacritic and imdb
  }
} // call others API here
// https://api.thetvdb.com/swagger

export default API;