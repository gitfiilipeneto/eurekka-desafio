import React, { useState, useEffect } from "react";
import OmdbRender from "./OmdbRender";
import API from "../api/api";

const TmdbRender = ({ moviesArray }) => {
  const [movieMetaData, setMovieMetaData] = useState({ imdb_id: 0 });
  const [imdb_index, setImdb_index] = useState("");
  const [addtionalMetaData, setAdditionalMetadata] = useState({});

  // useEffect(() => {
  //   API.getSpecificMovie(movieId).then((movieMetaData) =>
  //     setMovieMetaData(movieMetaData)
  //   );
  //   console.log(API.getSpecificMovie(movieId), "??")
  // }, []);
  const getAdditionalData = (imdbId) => {
    API.getOMDB(imdbId).then((movieAdditionalMetadata) =>
      setAdditionalMetadata(movieAdditionalMetadata)
    );
  };

  const getMovieMetaData = (id) => {
    API.getSpecificMovie(id).then((movieMetaData) =>
      setMovieMetaData(movieMetaData)
    );
    let imdbId = movieMetaData.imdb_id.toString();
    setImdb_index(imdbId);
    
    getAdditionalData(imdbId)    

    console.log(id, "movie Id and title", movieMetaData.title);
    console.log(movieMetaData, "MovieMEtaData");
    console.log(imdb_index, "imdbIndex");
    console.log(addtionalMetaData, "additionalMetaData")
  };

  let moviesMap = moviesArray.map((movie) => {
    let id = movie.id.toString();

    return (
      <div>
        <span>
          {movie.title} Rating: {movie.vote_average}{" "}
        </span>
        {/* <OmdbRender imdb_index={imdb_index}/> */}

        <button onClick={() => getMovieMetaData(id)}>set movie Id</button>
      </div>
    );
  });

  return <div>{moviesMap}</div>;
};

export default TmdbRender;
