import React from "react";
import ReactDOM from "react-dom";
import Controllers from "./api/Controllers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
} from "react-router-dom";
import MovieFullInfo from "./components/MovieFullInfo";

const RenderSingleMovie = () => {
  const { movieId } = useParams();

  return <MovieFullInfo movieId={movieId} />;
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Controllers />
        </Route>

        <Route
          path="/movie-details/:movieId"
          children={<RenderSingleMovie />}
        />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);