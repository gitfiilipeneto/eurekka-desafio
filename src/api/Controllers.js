import React, { useState, useEffect } from "react";
import TmdbRender from "../components/TmdbRender";
import API from "./api";

const Controllers = () => {

  const [tmdb, setTmdb] = useState({ results: [] });

  const [pagination, setPagination] = useState(1);
  // const [movieId, setMovieId] = useState('');
  useEffect(() => {
    API.getTMDBTopRatting(pagination).then((TMDBTopRatting) =>
      setTmdb(TMDBTopRatting)
    );
  }, []);

  // useEffect(() => {
  //   API.getSpecificMovie(movieId).then((specificMovie) =>
  //     setMovieId(specificMovie)
  //   );
  // }, []);

  // useEffect(() => {
  //   API.getOMDB(imdbID)
  //   .then((omdb) => setOMDB(omdb));
  // }, []);

  const nextPage = () => {
    setPagination(pagination + 1);
    API.getTMDBTopRatting(pagination + 1).then((TMDBTopRatting) =>
      setTmdb(TMDBTopRatting)
    );
  };
  const previousPage = () => {
    if (pagination === 1) {
      return;
    } else {
      setPagination(pagination - 1);
      API.getTMDBTopRatting(pagination - 1).then((TMDBTopRatting) =>
        setTmdb(TMDBTopRatting)
      );
    }
  };

  // let imdbID = tmdb.imdb_id.toString()// teste

  console.log(tmdb, "TMDB top rating");
 
  // console.log(movieId, "movieId");


  let moviesArray = tmdb.results;


  



  return (
    <>
      page: {pagination}

      <TmdbRender moviesArray= {moviesArray}/>
      <button onClick={() => previousPage()}>Previous Page</button>
      <button onClick={() => nextPage()}>NextPage</button>
    </>
  );
};

//use this to default application controller
//start components logic
export default Controllers;
