import React, { Component } from "react";
import MoviesList from "../movies-list/movies-list";
import { connect } from "react-redux";
import firebase from "../../firebase/";
import { addMovies } from "../../store/actions";
import UploadFile from "../upload-file/upload-file";
import Search from "../search/search";
import CreateMovie from "../create-movie/create-movie";
import Sort from "../sort/sort";
import "./movies-catalog.scss";

class MoviesCatalog extends Component {
  state = {
    searchQuery: "",
    sort: false,
    formVisibility: false
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
  removeItemFromDb = id => {
    firebase
      .database()
      .ref(`/movies/${id}`)
      .remove()
      .then(() => {
        this.removeItemFromStore(id);
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
      return a.Title.toLowerCase() > b.Title.toLowerCase() ? 1 : -1;
    });
  };
  render() {
    const { movies, addMoviesToStore } = this.props;
    const { searchQuery, sort, formVisibility } = this.state;
    const moviesSorted = sort ? this.sortByAlphabet(movies) : movies;
    const moviesToShow = this.filterMovies(searchQuery, moviesSorted);
    const moviesList = movies.length ? (
      <MoviesList onRemove={this.removeItemFromDb} movies={moviesToShow} />
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
          />
          <Sort onSortChanged={this.onSortChanged} />
        </div>
        {moviesList}
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return {
    movies
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addMoviesToStore: movies => {
      dispatch(addMovies(movies));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesCatalog);
