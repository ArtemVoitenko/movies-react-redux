import React, { useState } from "react";
import "./dropdown.scss";
const Dropdown = ({ items, changeActive, activeItem }) => {
  const [dropdownVisible, toggleDropdown] = useState(false);
  const onChangeActive = e => {
    let target = e.target;
    while (e.target !== "UL") {
      if (target.tagName == "LI") {
        changeActive(target.innerText);
        toggleDropdown(!dropdownVisible);
        return;
      }
      target = target.parentNode;
    }
  };
  return (
    <div className="dropdown">
      <div
        className="dropdown__header form-control"
        onClick={() => toggleDropdown(!dropdownVisible)}
      >
        {activeItem}
      </div>
      <ul
        className={`dropdown__list dropdown-menu ${
          dropdownVisible ? "active" : null
        }`}
        onClick={e => {
          onChangeActive(e);
        }}
      >
        {items.map(item => {
          return (
            <li
              key={item}
              className={`dropdown__item dropdown-item ${
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
