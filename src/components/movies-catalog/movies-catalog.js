import React, { Component } from "react";
import MoviesList from "../movies-list/movies-list";
import { connect } from "react-redux";
import firebase from "../../firebase/";
import {
  addMovies,
  toggleSuccessPopup,
  setItemToRemove,
  setLoading
} from "../../store/actions";
import UploadFile from "../upload-file/upload-file";
import Search from "../search/search";
import CreateMovie from "../create-movie/create-movie";
import Sort from "../sort/sort";
import "./movies-catalog.scss";
import ConfirmationPopup from "../confirmation-popup/confirmation-popup";
import SuccessPopup from "../success-popup/success-popup";
import LoadingIndicator from "../loading-indicator/loading-indicator";

class MoviesCatalog extends Component {
  state = {
    searchQuery: "",
    sort: false,
    formVisibility: false,
    confirmationVisibility: false
  };
  componentDidMount() {
    this.getMoviesFromDb();
  }
  getMoviesFromDb() {
    firebase
      .database()
      .ref("/movies/")
      .once("value")
      .then(snapshot => {
        if (snapshot.val()) {
          return this.props.addMoviesToStore(Object.values(snapshot.val()));
        }
      });
  }
  removeItemFromStore = itemId => {
    const { movies } = this.props;
    const removeItemIndex = movies.findIndex(item => {
      return item.id === itemId;
    });
    const newMoviesArray = [
      ...movies.slice(0, removeItemIndex),
      ...movies.slice(removeItemIndex + 1)
    ];
    this.props.addMoviesToStore(newMoviesArray);
  };
  removeClicked = id => {
    this.props.setItemToRemove(id);
    this.setState({ confirmationVisibility: true });
  };
  removeItemFromDb = id => {
    this.closeConfirmPopup();
    this.props.setLoading(true);
    firebase
      .database()
      .ref(`/movies/${id}`)
      .remove()
      .then(() => {
        this.removeItemFromStore(id);
        this.props.setLoading(false);
      });
  };
  showCreateForm = () => {
    this.setState({ formVisibility: true });
  };
  hideCreateForm = () => {
    this.setState({ formVisibility: false });
  };
  onSearch = searchQuery => {
    this.setState({ searchQuery });
  };
  onSortChanged = value => {
    this.setState({
      sort: value
    });
  };
  filterMovies = (searchQuery, movies) => {
    return movies.filter(item => {
      return (
        item.Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.Stars.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  };
  sortByAlphabet = movies => {
    return [...movies].sort((a, b) => {
      return a.Title.toLowerCase().localeCompare(b.Title.toLowerCase());
    });
  };
  closeConfirmPopup = () => {
    this.setState({ confirmationVisibility: false });
  };
  render() {
    const {
      movies,
      addMoviesToStore,
      successPopupVisibility,
      toggleSuccessPopup,
      itemToRemove,
      loading
    } = this.props;
    const {
      searchQuery,
      sort,
      formVisibility,
      confirmationVisibility
    } = this.state;
    const moviesSorted = sort ? this.sortByAlphabet(movies) : movies;
    const moviesToShow = this.filterMovies(searchQuery, moviesSorted);
    const moviesList = movies.length ? (
      <MoviesList onRemove={this.removeClicked} movies={moviesToShow} />
    ) : null;

    return (
      <div className="container">
        <div className="header jumbotron">
          <Search onSearch={this.onSearch} />

          <UploadFile />
          <CreateMovie
            moviesInStore={this.props.movies}
            addMoviesToStore={addMoviesToStore}
            showCreateForm={this.showCreateForm}
            formVisibility={formVisibility}
            hideCreateForm={this.hideCreateForm}
            toggleSuccessPopup={toggleSuccessPopup}
          />
          <Sort onSortChanged={this.onSortChanged} />
        </div>
        {moviesList}
        {successPopupVisibility ? <SuccessPopup /> : null}
        {confirmationVisibility ? (
          <ConfirmationPopup
            actionConfirm={() => {
              this.removeItemFromDb(itemToRemove);
            }}
            closePopup={this.closeConfirmPopup}
          />
        ) : null}
        {loading ? <LoadingIndicator /> : null}
      </div>
    );
  }
}

const mapStateToProps = ({
  movies,
  successPopupVisibility,
  itemToRemove,
  loading
}) => {
  return {
    movies,
    successPopupVisibility,
    itemToRemove,
    loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addMoviesToStore: movies => {
      dispatch(addMovies(movies));
    },

    toggleSuccessPopup: visibily => {
      dispatch(toggleSuccessPopup(visibily));
    },
    setItemToRemove: id => {
      dispatch(setItemToRemove(id));
    },
    setLoading: loading => {
      dispatch(setLoading(loading));
    }

    // toggleRemovePopup: visibily => {}
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesCatalog);
