export const addMovies = movies => {
  return {
    type: "ADD_MOVIE",
    payload: movies
  };
};

export const toggleSuccessPopup = visibility => {
  return {
    type: "TOGGLE_SUCCESS_POPUP",
    payload: visibility
  };
};

export const setItemToRemove = id => {
  return {
    type: "SET_ITEM_TO_REMOVE",
    payload: id
  };
};

export const setLoading = loading => {
  return {
    type: "SET_LOADING",
    payload: loading
  };
};
