import React, { useState, useEffect } from "react";
import TmdbRender from "../components/TmdbRender";
import API from "./api";



const Controllers = () => {
  const [tmdb, setTmdb] = useState([]);
  const [omdb, setOMDB] = useState([]);
  const [pagination, setPagination] = useState(1)

  const nextPage = () => {
    setPagination(pagination + 1)
    API.getTMDB(pagination + 1)
    .then((tmdb) => setTmdb(tmdb));
  }
  // let imdbID = tmdb.imdb_id.toString()// teste

  console.log(pagination)

  useEffect(() => {
    API.getTMDB(pagination)
    .then((tmdb) => setTmdb(tmdb));
  }, []);

  // useEffect(() => {
  //   API.getOMDB(imdbID)
  //   .then((omdb) => setOMDB(omdb));
  // }, []);

  let moviesArray = tmdb.results
  console.log(typeof(moviesArray))
 

  
  return (
    <>
     {/* {moviesArray.map((movie, index) => {
      return(
        <p>{movie.title}</p>
      )
    })} */}

    <button
    onClick={() => nextPage()}>NextPage</button>
  </>

  );
};

//use this to default application controller

export default Controllers;
