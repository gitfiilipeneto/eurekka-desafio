import React from "react";
// import OmdbRender from "./OmdbRender";


const TmdbRender = ({ moviesArray, getMovieMetaData }) => {
  

  let moviesMap = moviesArray.map((movie) => {
    // let id = movie.id.toString();
    
    
    return (
      <div>
        <span key = {movie.id}>
          
          {movie.title} id:{movie.id.toString()} {" "}
          {/* {movie.vote_average} */}
        </span>
        {/* <OmdbRender addtionalMetaData={addtionalMetaData}/> */}

        <button onClick={() => getMovieMetaData(movie.id.toString())}>set movie Id</button>
      </div>
    );
  });

  return <div>{moviesMap}</div>;
};

export default TmdbRender;
