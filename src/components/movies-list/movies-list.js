import React from "react";
import MoviesItem from "./movies-item/movies-item";

const MoviesList = ({ movies, onRemove }) => {
  const renderMoviesList = moviesList => {
    return moviesList.map(item => {
      return (
        <MoviesItem
          key={item.id}
          id={item.id}
          title={item.Title}
          onRemove={id => {
            onRemove(id);
          }}
        />
      );
    });
  };
  return <div className="row">{renderMoviesList(movies)}</div>;
};

export default MoviesList;
