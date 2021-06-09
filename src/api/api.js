let apiKey = "a341a9d7cb2bd4eba1b729d6e957cbf9"
let tmdb = undefined

class API{
    static getTMDB(){
        if(!tmdb){
            tmdb = fetch('https://api.themoviedb.org/3/movie/550?api_key=a341a9d7cb2bd4eba1b729d6e957cbf9')
            .then( response => response.json())
        }
        return tmdb
        .then (tmdb => tmdb)
    }
    
}

export default API