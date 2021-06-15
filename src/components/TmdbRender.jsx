import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Typography, CardActions } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import Collapse from "@material-ui/core/Collapse";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 450,
    // maxHeight: 900,
    paddingTop: "50.25%",
    objectFit: "contain", // 16:9
  },
  margin: {
    marginTop: 10,
    marginBottom: 10,
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

const TmdbRender = ({
  moviesArray,
  getMovieMetaData,
  movieMetaData,
  addtionalMetaData,
}) => {
  // useEffect(() => {
  //   metaDataDependency()
  //   console.log(addtionalMetaData,"metadadependency")
  // }, []);

  const [expanded, setExpanded] = useState(false);
  const [expandedId, setExpandedId] = useState(-1);
  const classes = useStyles();

  let getMovieCover = "https://image.tmdb.org/t/p/w500/";
  let releaseDate = "Release Date: ";
  let voteAvg = "Vote Average: ";

  const handleExpandClick = (i, id) => {
    setExpandedId(expandedId === i ? -1 : i);
    getMovieMetaData(id);

    //multirender movie label
  };
  console.log(addtionalMetaData);

  return moviesArray.map((movie, i) => {
    let id = movie.id.toString();
    return (
      <div className={classes.margin}>
        <Card className={classes.root} key={movie.id}>
          <CardHeader
            title={movie.title}
            subheader={releaseDate + movie.release_date}
          />
          <Typography variant="body1" color="textSecondary" component="p">
            {voteAvg + movie.vote_average}
          </Typography>
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
              <Chip label={addtionalMetaData.Genre} />
            </CardContent>
          </Collapse>

          {/* <button
          onClick={() => {
          }}
        >
          onAdd
        </button> */}
        </Card>
      </div>
    );
  });
};

export default TmdbRender;
