import React, {useState, useEffect} from "react";
import API from "../api/api";

const OmdbRender = ({ tmdb_ID, imdb_index }) => {
  // useState()
  // useEffect(() => {
  //   API.getOMDB(imdb_index).then((omdb) => setOMDB(omdb));
  // }, []);
  
  return <p>{imdb_index}</p>;
};

export default OmdbRender;
