
let tmdb = undefined

class API{
    static getTMDB(){
        if(!tmdb){
            tmdb = fetch('https://api.themoviedb.org/3/movie/550?api_key=a341a9d7cb2bd4eba1b729d6e957cbf9') // api Example, single movie req i'll read the doc for more

            .then( response => response.json())
        }
        return tmdb
        .then (tmdb => tmdb)
    }
    
} // call others API here

export default API