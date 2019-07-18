import React from "react";
const Actors = ({ actors }) => {
  const actorsList = actors.split(", ");
  return (
    <div className="movie-info__actors">
      {actorsList.map(item => {
        return (
          <div className="movie-info__actor">
            <img
              src={`https://robohash.org/${item}`}
              alt=""
              className="movie-info__avatar"
            />
            <p className="movie-info__name">{item}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Actors;
