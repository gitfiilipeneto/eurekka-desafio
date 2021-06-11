import React, { useState, useEffect } from "react";
import TmdbRender from "../components/TmdbRender";
import API from "./api";



const Controllers = () => {
  useEffect(() => {
    API.getTMDBTopRatting(pagination)
    .then((tmdb) => setTmdb(tmdb));
  }, []);

  const [tmdb, setTmdb] = useState({results: []});
  const [omdb, setOMDB] = useState([]);
  const [pagination, setPagination] = useState(1)


  const nextPage = () => {
    setPagination(pagination + 1)
    API.getTMDBTopRatting(pagination + 1)
    .then((tmdb) => setTmdb(tmdb));
  }
  // let imdbID = tmdb.imdb_id.toString()// teste

  console.log(pagination)
  console.log(tmdb.results)

 

  // useEffect(() => {
  //   API.getOMDB(imdbID)
  //   .then((omdb) => setOMDB(omdb));
  // }, []);

  
  let moviesArray = tmdb.results
  console.log(typeof(moviesArray))

  let moviesMap = tmdb.results.map((movie) => {
    return(
      <div>
        <p>{movie.title} IMDB rating: {movie.vote_average} </p>

      </div>
    )
  })
  
  
  return (
    <>
    {moviesMap}
    <button>Previous Page</button>
    <button
    onClick={() => nextPage()}>NextPage</button>
  </>

  );
};

//use this to default application controller

export default Controllers;
