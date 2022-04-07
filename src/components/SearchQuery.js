import React from "react";
import { Link } from "react-router-dom";

const SearchQuery = ({ queryResults }) => {
  return (
    <>
      Query results : {queryResults.total_results}
      {queryResults.results.map((movie) => {
          
        return (
          <>
            <Link to={`/movie-details/${movie.id.toString()}`}>
              <div key={movie.id}></div>
              <p>{movie.title}</p>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default SearchQuery;
