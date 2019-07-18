import React from "react";
import { Link } from "react-router-dom";
import "./movies-item.scss";
const MoviesItem = ({ id, title, onRemove }) => {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="movies-item  ">
        <img
          src={`http://gravatar.com/avatar/${id}?s=300&d=identicon`}
          // src={`https://robohash.org/${md5(id)}`}
          alt=""
          className="movies-item__img"
        />
        <p className="movies-item__title">{title}</p>
        <div className="btn-group">
          <button
            className="movies-item__remove btn btn-danger"
            onClick={() => {
              onRemove(id);
            }}
          >
            remove
          </button>
          <Link className="btn btn-info" to={`${id}`}>
            info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoviesItem;
