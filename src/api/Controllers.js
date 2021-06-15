import React, { useState, useEffect } from "react";
import TmdbRender from "../components/TmdbRender";
import API from "./api";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const Controllers = () => {
  const [tmdb, setTmdb] = useState({ results: [] });

  const [pagination, setPagination] = useState(1);

  // const [imdb_index, setImdb_index] = useState("");
  const [movieMetaData, setMovieMetaData] = useState({ imdb_id: 0 });
  const [addtionalMetaData, setAdditionalMetadata] = useState({});

  useEffect(() => {
    API.getTMDBTopRatting(pagination).then((TMDBTopRatting) => {
      setTmdb(TMDBTopRatting);
      // console.log(`${tmdb.results} initial render`)
    });
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

  const getMovieMetaData = (id) => {
    API.getSpecificMovie(id).then((movieMetaData) => {
      setMovieMetaData(movieMetaData);
      return getAdditionalData(movieMetaData.imdb_id.toString());
    });
  };

  const getAdditionalData = (imdbId) => {
    API.getOMDB(imdbId).then((addtionalMetaData) => {
      setAdditionalMetadata(addtionalMetaData);
      console.log(addtionalMetaData);
    });
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    control: {
      padding: "20",
      margin: "10",
    },
  }));

  let moviesArray = tmdb.results;

  const classes = useStyles();

  return (
    <>
      <p>page: {pagination}</p>
      <Grid container className={classes.root} spacing={2}>
        <Grid container justify="space-around" spacing={2}>
          <>
            <TmdbRender
              className={classes.padding}
              moviesArray={moviesArray}
              getMovieMetaData={getMovieMetaData}
              movieMetaData={movieMetaData}
              addtionalMetaData={addtionalMetaData}
            />
          </>
          <Grid container justify="center" >
            <button onClick={() => previousPage()}>Previous Page</button>
            <button onClick={() => nextPage()}>NextPage</button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

//use this to default application controller
//start components logic
export default Controllers;
