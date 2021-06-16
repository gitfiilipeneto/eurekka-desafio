import React, { useState, useEffect } from "react";
import TmdbRender from "../components/TmdbRender";
import API from "./api";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import MuiButton from "@material-ui/core/Button";

const Controllers = () => {
  const [tmdb, setTmdb] = useState({ results: [] });

  const [pagination, setPagination] = useState(1);

  const [movieMetaData, setMovieMetaData] = useState({ imdb_id: 0 });
  const [addtionalMetaData, setAdditionalMetadata] = useState({});
  const [ratings, setRatings] = useState({
    Ratings: [{ Source: " ", Value: " " }],
  });

  useEffect(() => {
    API.getTMDBTopRatting(pagination).then((TMDBTopRatting) => {
      setTmdb(TMDBTopRatting);
    });
  }, []);

  const nextPage = () => {
    setPagination(pagination + 1);
    scrollToTop();
    API.getTMDBTopRatting(pagination + 1).then((TMDBTopRatting) =>
      setTmdb(TMDBTopRatting)
    );
  };
  const previousPage = () => {
    if (pagination === 1) {
      return;
    } else {
      setPagination(pagination - 1);
      scrollToTop();
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
      setRatings(addtionalMetaData.Ratings);
      setAdditionalMetadata(addtionalMetaData);
    });
  };

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    control: {
      padding: "20",
      margin: "10",
    },
    spacement: {
      marginRight: "50px",
    },
  }));
  const Button = styled(MuiButton)(spacing);

  const controls = (
    <Grid container justify="center">
      <Button
        mt={2}
        // className={classes.spacing}
        disabled={pagination === 1}
        variant="contained"
        color="primary"
        onClick={() => previousPage()}
      >
        Previous Page
      </Button>
      <Button
        mt={2}
        variant="contained"
        color="primary"
        onClick={() => nextPage()}
      >
        Next Page
      </Button>
    </Grid>
  );

  let moviesArray = tmdb.results;

  const classes = useStyles();

  return (
    <>
      <h1>Page: {pagination}</h1>
      {controls}
      <Grid container className={classes.root} spacing={2}>
        <Grid container justify="space-around" spacing={2}>
          <>
            <TmdbRender
              className={classes.padding}
              moviesArray={moviesArray}
              getMovieMetaData={getMovieMetaData}
              movieMetaData={movieMetaData}
              addtionalMetaData={addtionalMetaData}
              ratings={ratings}
            />
          </>
        </Grid>
      </Grid>
      {controls}
    </>
  );
};

//use this to default application controller
//start components logic
export default Controllers;
