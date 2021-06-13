import React, {useState, useEffect} from "react";
import API from "../api/api";

const TmdbRender = ({ moviesArray }) => {
  const [movieId, setMovieId] = useState()
  const [movieMetaData, setMovieMetaData] = useState({})

  useEffect(() => {
    API.getSpecificMovie(movieId).then((movieMetaData) =>
      setMovieMetaData(movieMetaData)
    );
    console.log(API.getSpecificMovie(movieId), "??")
  }, []);

  const getMovieMetaData = (id) => {
    API.getSpecificMovie(id).then((movieMetaData) =>
    setMovieMetaData(movieMetaData)
  );
  console.log(movieMetaData, "MovieMEtaData")

  }
  let moviesMap = moviesArray.map((movie) => {
    let id = movie.id.toString();
    return (
      <div>
        <a href="#">
          <span>
            {movie.title} Rating: {movie.vote_average}{" "}
          </span>
        </a>
        <button onClick={() => getMovieMetaData(id) }>set movie Id</button>
      </div>
    );
  });

  return <div>{moviesMap}</div>;
};

export default TmdbRender;
