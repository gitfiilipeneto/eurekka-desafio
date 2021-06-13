import React from "react";

const TmdbRender = ({moviesArray}) => {



  let moviesMap = moviesArray.map((movie) => { 
    let id = movie.id.toString()
    return (
      <div>
        <a href="#">
        <span>
          {movie.title} Rating: {movie.vote_average}{" "}
        </span>
        </a>
        <button onClick={() => console.log(id)}>log movie Id</button>
     
      </div>
    );
  });


  return <div>
    {moviesMap}
  </div>;
};

export default TmdbRender;
