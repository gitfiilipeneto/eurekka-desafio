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
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

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
  average: {
    marginLeft: 20,
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
    justifyContent: "space-between",
  },
}));

const TmdbRender = ({
  moviesArray,
  getMovieMetaData,
  addtionalMetaData,
  ratings,
  addToFavs,
  removeFromFavs,
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
          console.log("aaaaaa");
          return null;
        } else {
          ratingsArr = [
            ...ratingsArr,
            ` ${ratings[i].Source}: ${ratings[i].Value} `,
          ];
        }
      }
      
    };
    ratingsMap();

    //pq essa função da problema?
    // const splitedArrMovies = (arr) => {
    //   arr.map((rating) => {
    //     console.log(rating);
    //     return <p>{rating}</p>;
    //   });
    // };

    // tratamento dos generos para um array de generos
    let genresArr = [] 
    const  splitedGenre =  () => {
      let genresFromApiCall = addtionalMetaData.Genre
      genresArr = [...genresArr, genresFromApiCall]
      // let splitedGenresArr = genresArr.toString().split(",")
      // console.log(genresArr, genresArr.length, "exe funct")
    }
    splitedGenre()

    let splitedGenresArr = genresArr.toString().split(",")
    let movieid = movie.id.toString()
    
    return (
      <div className={classes.margin}>
        <Card className={classes.root} key={movie.id}>
         <Link to={`/movie-details/${movieid}`}>
          <CardHeader
            title={movie.title}
            subheader={releaseDate + movie.release_date}
          />
          </Link>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            className={classes.average}
          >
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
            <IconButton onClick={() => removeFromFavs(i, movie)}>
              <DeleteIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                addToFavs(i, movie);
              }}
              aria-label="add to favorites"
            >
              <FavoriteIcon />
            </IconButton>

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
              {splitedGenresArr.map( singleGender => {
                return <Chip label={singleGender}/>
              })} 
              <CardContent>
                <Typography>
                  {ratingsArr.map((rating) => {
                    return <p>{rating}</p>;
                  })}
                </Typography>
              </CardContent>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  });
};

export default TmdbRender;
