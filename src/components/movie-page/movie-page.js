import React, { Component } from "react";
import firebase from "../../firebase";
import "./movie-info.scss";
import Actors from "../actors/actors";
export default class MoviePage extends Component {
  state = {
    movie: {}
  };
  componentDidMount() {
    console.log(this.props.itemId);
    this.getMovieFromDb(this.props.movieId);
  }
  getMovieFromDb = movieId => {
    firebase
      .database()
      .ref(`/movies/${movieId}`)
      .once("value")
      .then(snapshot => {
        this.setState({
          movie: snapshot.val()
        });
      });
  };

  render() {
    const {
      movie: { Title, Stars, id, Format }
    } = this.state;
    const year = this.state.movie["Release Year"];

    const actors = Stars ? <Actors actors={Stars} /> : null;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 jumbotron">
            <img
              src={`http://gravatar.com/avatar/${id}?s=500&d=identicon`}
              alt=""
              className="img-responsive"
            />
          </div>
          <div className="col-12 col-md-7">
            <div className="movie-info">
              <p className="movie-info__title">{Title}</p>
              <p className="movie-info__item">Release Year: {year}</p>
              <p className="movie-info__item">Format: {Format}</p>
              <p className="movie-info__item">Stars: {actors}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
