import React, { Component } from "react";
import "./dropdown.scss";
const Dropdown = ({ items, changeActive, activeItem }) => {
  return (
    <div className="dropdown">
      <div className="dropdown__header">{activeItem}</div>
      <ul
        className="dropdown__list"
        onClick={e => {
          changeActive(e);
        }}
      >
        {items.map(item => {
          return (
            <li
              key={item}
              className={`dropdown__item ${
                item === activeItem ? "active" : null
              }`}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
