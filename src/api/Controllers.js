import React, { useState, useEffect } from "react";
import TmdbRender from "../components/TmdbRender";
import MyMovies from "../components/MyMoviesList";
import API from "./api";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Controllers = () => {
  const [tmdb, setTmdb] = useState({ results: [] });

  const [pagination, setPagination] = useState(1);

  const [movieMetaData, setMovieMetaData] = useState({ imdb_id: 0 });
  const [addtionalMetaData, setAdditionalMetadata] = useState({});
  const [myMovies, setMyMovies] = useState([]);

  useEffect(() => {
    API.getTMDBTopRatting(pagination).then((TMDBTopRatting) => {
      setTmdb(TMDBTopRatting)
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
          <Grid container justify="center">
            <Button
              disabled={pagination === 1}
              variant="contained"
              color="primary"
              onClick={() => previousPage()}
            >
              Previous Page
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => nextPage()}
            >
              Next Page
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* <MyMovies/> */}
    </>
  );
};

//use this to default application controller
//start components logic
export default Controllers;
