import React from "react";

const ConfirmationPopup = ({ actionConfirm, closePopup }) => {
  return (
    <div className="popup__wrapper">
      <div className="popup">
        <p className="popup__title">
          Are you sure, yo want to delete this film?
        </p>
        <div className="popup__buttons">
          <button
            onClick={() => {
              actionConfirm();
            }}
            className="popup__confirm btn btn-success"
          >
            Yes
          </button>
          <button
            onClick={() => {
              closePopup();
            }}
            className="popup__cancel btn btn-danger "
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
export default ConfirmationPopup;
