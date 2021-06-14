import React, { useState, useEffect } from "react";
import TmdbRender from "../components/TmdbRender";
import API from "./api";

const Controllers = () => {
  const [tmdb, setTmdb] = useState({ results: [] });

  const [pagination, setPagination] = useState(1);

  // const [imdb_index, setImdb_index] = useState("");
  const [movieMetaData, setMovieMetaData] = useState({ imdb_id: 0 });
  const [addtionalMetaData, setAdditionalMetadata] = useState({});

  useEffect(() => {
    API.getTMDBTopRatting(pagination).then((TMDBTopRatting) =>
      setTmdb(TMDBTopRatting)
    );
  }, []);

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

  const [ratings, setRatings] = useState([{}]);

  const getMovieMetaData = (id) => {
    API.getSpecificMovie(id).then((movieMetaData) => {
      setMovieMetaData(movieMetaData);
      console.log(movieMetaData.imdb_id, "imdb ID");
      return getAdditionalData(movieMetaData.imdb_id.toString());
    });
  };

  const getAdditionalData = (imdbId) => {
    API.getOMDB(imdbId).then((addtionalMetaData) => {
      return setAdditionalMetadata(addtionalMetaData)
      
    });
  };
  let moviesArray = tmdb.results;

  return (
    <>
      page: {pagination}
      <TmdbRender
        moviesArray={moviesArray}
        getMovieMetaData={getMovieMetaData}
        addtionalMetaData={addtionalMetaData}
      />

      <button onClick={() => previousPage()}>Previous Page</button>
      <button onClick={() => nextPage()}>NextPage</button>
    </>
  );
};

//use this to default application controller
//start components logic
export default Controllers;
