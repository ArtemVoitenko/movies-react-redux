const initialState = {
  movies: [],
  successPopupVisibility: false,
  itemToRemove: null,
  loading: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE": {
      return {
        ...state,
        movies: action.payload
      };
    }
    case "TOGGLE_SUCCESS_POPUP": {
      return {
        ...state,
        successPopupVisibility: action.payload
      };
    }
    case "SET_ITEM_TO_REMOVE": {
      return {
        ...state,
        itemToRemove: action.payload
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        loading: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
