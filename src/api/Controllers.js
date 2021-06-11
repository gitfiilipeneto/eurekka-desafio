import React, { useState, useEffect } from "react";
import TmdbRender from "../components/TmdbRender";
import API from "./api";



const Controllers = () => {
  useEffect(() => {
    API.getTMDBTopRatting(pagination)
    .then((TMDBTopRatting) => setTmdb(TMDBTopRatting));
  }, []);

  const [tmdb, setTmdb] = useState({results: []});
  const [omdb, setOMDB] = useState([]);
  const [pagination, setPagination] = useState(1)


  const nextPage = () => {
    setPagination(pagination + 1)
    API.getTMDBTopRatting(pagination + 1)
    .then((TMDBTopRatting) => setTmdb(TMDBTopRatting));
  }
  const previousPage = () => {
    if(pagination === 1 ){
      return
    }else{
      setPagination(pagination - 1)
      API.getTMDBTopRatting(pagination - 1)
    .then((TMDBTopRatting) => setTmdb(TMDBTopRatting))
    }
  }
  // let imdbID = tmdb.imdb_id.toString()// teste

  console.log(tmdb)
  console.log(tmdb.results)

 

  // useEffect(() => {
  //   API.getOMDB(imdbID)
  //   .then((omdb) => setOMDB(omdb));
  // }, []);

  
  let moviesArray = tmdb.results
  console.log(typeof(moviesArray))

  let moviesMap = moviesArray.map((movie) => {
    return(
      <div>
        <p>{movie.title} IMDB rating: {movie.vote_average} </p>

      </div>
    )
  })
  
  
  return (
    <>
    page: {pagination}
    {moviesMap}
    <button
    onClick={() => previousPage()} >Previous Page</button>
    <button
    onClick={() => nextPage()}>NextPage</button>
  </>

  );
};

//use this to default application controller
//start components logic
export default Controllers;
