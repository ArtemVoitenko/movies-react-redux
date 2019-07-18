import React, { Fragment } from "react";
import MoviesCatalog from "../movies-catalog/movies-catalog";
import MoviePage from "../movie-page/movie-page";
import { Route } from "react-router-dom";
import "../../styles/styles.scss";
const App = () => {
  return (
    <Fragment>
      <Route path="/" exact component={MoviesCatalog} />
      <Route
        path="/:id"
        render={({ match }) => {
          return <MoviePage movieId={match.params.id} />;
        }}
      />
    </Fragment>
  );
};
export default App;
