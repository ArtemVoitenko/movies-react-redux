import React, { Component, Fragment } from "react";
import md5 from "md5";
import firebase from "../../firebase";
import "./movie-form.scss";
import Dropdown from "../dropdown/dropdown";
import MaskedInput from "react-text-mask";
export default class CreateMovie extends Component {
  dropdownItems = ["VHS", "DVD", "Blue-Ray"];
  state = {
    Title: "",
    "Release Year": "",
    Format: this.dropdownItems[0],
    Stars: "",
    id: "",
    validationError: ""
  };
  typeMovieInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  isMovieExists = (movieId, movies) => {
    const movieIdx = movies.findIndex(item => {
      return item.id === movieId;
    });
    return movieIdx == -1 ? false : true;
  };

  validateMovieInputs = () => {
    const { Title, Format, Stars, id } = this.state;
    const { moviesInStore } = this.props;
    const year = this.state["Release Year"];
    if (!Title || !year || !Format || !Stars) {
      this.setState({
        validationError: "Fill in all fields"
      });
    } else if (this.isMovieExists(id, moviesInStore)) {
      this.setState({
        validationError: "Movie is already exists"
      });
    }
  };
  setMovieToDb = () => {
    const { moviesInStore, toggleSuccessPopup } = this.props;
    firebase
      .database()
      .ref(`/movies/${md5(this.state.Title)}`)
      .update(this.state)
      .then(() => {
        this.props.addMoviesToStore([...moviesInStore, this.state]);
        this.setState({
          Title: "",
          "Release Year": "",
          Format: "",
          Stars: "",
          id: "",
          validationError: ""
        });
        toggleSuccessPopup(true);
        setTimeout(() => {
          toggleSuccessPopup(false);
        }, 3000);
      });
  };

  formatChange = Format => {
    this.setState({ Format });
  };
  onCreateMovie = async e => {
    e.preventDefault();
    await this.setState({
      id: md5(this.state.Title),
      validationError: ""
    });
    this.validateMovieInputs();
    const { validationError } = this.state;

    if (!validationError) {
      this.setMovieToDb();
      this.props.hideCreateForm();
    } else {
      alert(validationError);
    }
  };
  render() {
    const { Title, Format, Stars, id } = this.state;
    const year = this.state["Release Year"];
    const { formVisibility, showCreateForm, hideCreateForm } = this.props;

    return (
      <Fragment>
        <button className="btn btn-warning" onClick={showCreateForm}>
          Add movie
        </button>
        <div
          className={`movie-form__wrapper ${formVisibility ? "active" : null}`}
        >
          <form className="movie-form" onSubmit={this.onCreateMovie}>
            <button
              type="button"
              className="btn btn-danger movie-form__close"
              onClick={hideCreateForm}
            >
              X
            </button>
            <p className="movie-form__title">Add new movie</p>
            <label htmlFor="" className="movie-form__label">
              <span className="movie-form__tip">Title</span>
              <input
                onChange={this.typeMovieInput}
                type="text"
                name="Title"
                value={Title}
                className="movie-form__input form-control"
              />
            </label>
            <label htmlFor="" className="movie-form__label">
              <span className="movie-form__tip">Release year</span>
              <input
                onChange={this.typeMovieInput}
                type="text"
                name="Release Year"
                value={year}
                className="movie-form__input form-control"
              />
            </label>
            <label htmlFor="" className="movie-form__label">
              <span className="movie-form__tip">Format</span>
              <Dropdown
                items={this.dropdownItems}
                changeActive={this.formatChange}
                activeItem={Format}
              />
            </label>
            <label htmlFor="" className="movie-form__label">
              <span className="movie-form__tip">Stars</span>
              <input
                onChange={this.typeMovieInput}
                type="text"
                name="Stars"
                className="movie-form__input form-control"
                value={Stars}
              />
              {/* <MaskedInput
                mask={[/(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/]}
                onChange={this.typeMovieInput}
                type="text"
                name="Stars"
                className="movie-form__input form-control"
                value={Stars}
              /> */}
            </label>
            <button
              className="movie-form__submit btn btn-success"
              type="submit"
            >
              Add movie
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}
