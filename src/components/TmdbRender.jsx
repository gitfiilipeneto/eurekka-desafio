import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Typography, CardActions } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import Collapse from '@material-ui/core/Collapse';
import Chip from "@material-ui/core/Chip"

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
  diabled: {
    backgroundColor: "red"[500],
  },
}));

const TmdbRender = ({ moviesArray, getMovieMetaData, movieMetaData, addtionalMetaData }) => {
  const [expanded, setExpanded] = useState(false);
  const [expandedId, setExpandedId] = useState(-1);
  const classes = useStyles();
  // let movie = {id : 0}

  let getMovieCover = "https://image.tmdb.org/t/p/w500/";
  let releaseDate = "Release Date: ";


  const handleExpandClick = (i, id) => {   
    // let genres = movieMetaData.map(movie => {
    //   <Chip label = {movie.genres} />
    // } ) //multirender movie label
    setExpandedId(expandedId === i ? -1 : i);
    
    getMovieMetaData(id)
    console.log(addtionalMetaData, "TMDB render")    
  };
  
 

  return moviesArray.map((movie, i) => {
    let id = movie.id.toString()
    return (
      <div>
      <Card className={classes.root} key = {movie.id}>
        <CardHeader
          title={movie.title}
          subheader={releaseDate + movie.release_date}
        />
        <CardMedia
          className={classes.media}
          tittle={movie.title}
          image={getMovieCover + movie.poster_path}
        />
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            {movie.overview}
          </Typography>
        </CardContent>
        <CardActions disablespacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={() => handleExpandClick(i, id)}
            aria-expanded={expandedId === i}
            aria-label="show more"
          >

          <UnfoldMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
          <CardContent>
            <Chip label="genres" />
            
          </CardContent>
        </Collapse>

        {/* <button
          onClick={() => {
            getMovieMetaData(
              movie.id.toString(),
              console.log(moviesArray, "onFunction")
            );
          }}
        >
          set movie Id
        </button> */}
      </Card>
      </div>

    );
  });
};

export default TmdbRender;
