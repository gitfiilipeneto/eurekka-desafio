import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Typography, CardActions } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import Collapse from "@material-ui/core/Collapse";
import Chip from "@material-ui/core/Chip";
import FavoriteIcon from '@material-ui/icons/Favorite';

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

  space: {
    justifyContent:"space-between"
  },
}));

const TmdbRender = ({
  moviesArray,
  getMovieMetaData,
  addtionalMetaData,
  ratings,
  addToFavs,
  removeFromFavs,
  favorite
}) => {
  const [expanded, setExpanded] = useState(false);
  const [expandedId, setExpandedId] = useState(-1);
  const classes = useStyles();

  let getMovieCover = "https://image.tmdb.org/t/p/w500/";
  let releaseDate = "Release Date: ";
  let voteAvg = "Vote Average: ";

  const handleExpandClick = (i, id) => {
    setExpandedId(expandedId === i ? -1 : i);
    getMovieMetaData(id);
  };

  return moviesArray.map((movie, i) => {
    let id = movie.id.toString();
    let ratingsArr = [];
    const ratingsMap = () => {
      for (let i = 0; i < ratings.length; i++) {
        if (ratings.length === undefined) {
          console.log(1);
          return null;
        } else {
          ratingsArr = [
            ...ratingsArr,
            ` ${ratings[i].Source}: ${ratings[i].Value} `,
          ].join("");
        }
      }
    };
    ratingsMap();
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
          <CardActions disablespacing className={classes.space}>
            
            <IconButton className={favorite}
              onClick={() => {addToFavs(i,movie)
              }}
            aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
          <button
          onClick={()=> removeFromFavs(i)} >Remove</button>
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
              <CardContent>
                <Typography>{ratingsArr}</Typography>
              </CardContent>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  });
};

export default TmdbRender;
