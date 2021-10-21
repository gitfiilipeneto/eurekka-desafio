import React from "react";
import ReactDOM from "react-dom";
import Controllers from "./api/Controllers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/">
        <Controllers />
      </Route>
      <Route
        path="/showdetails/:movieid"
        render={(movieid) => {
          <Redirect to={`${movieid}`} />;
        }}
      />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
