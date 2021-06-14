import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from '@material-ui/core/CardContent'
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 500,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "red"[500],
  },
}));

const TmdbRender = ({ moviesArray, getMovieMetaData }) => {
  const classes = useStyles();
  console.log(moviesArray)
  let getMovieCover = 'https://image.tmdb.org/t/p/w500/'
  
  return moviesArray.map((movie) => {
    return (
      <Card className={classes.root}>
        <CardHeader title={movie.title} subheader="September 14, 2016" />
        <CardMedia className={classes.media} tittle={movie.title}
        image= {getMovieCover+movie.poster_path} />
        <CardContent>
          <Typography>
            {movie.overview}
          </Typography>
        </CardContent>

        <button
          onClick={() => {
            getMovieMetaData(
              movie.id.toString(),
              console.log(movie.id.toString(), "onFunction")
            );
          }}
        >
          set movie Id
        </button>
      </Card>
    );
  });
};

export default TmdbRender;
