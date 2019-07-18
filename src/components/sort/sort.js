import React from "react";
import "./sort.scss";
const Sort = ({ onSortChanged }) => {
  return (
    <React.Fragment>
      <div className="sort">
        <div className="sort__label"> Alphabet sort:</div>
        <input
          className="switch__input"
          type="checkbox"
          id="switch"
          onChange={e => {
            onSortChanged(e.target.checked);
          }}
        />
        <label className="switch sort__switch" htmlFor="switch" />
      </div>
    </React.Fragment>
  );
};
export default Sort;
