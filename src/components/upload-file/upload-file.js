import React, { Component } from "react";
import { parseDocument } from "../../services/parseDocument";
import firebase from "../../firebase";
import { connect } from "react-redux";
import { addMovies } from "../../store/actions";
import "./upload-file.scss";
class UploadFile extends Component {
  handleFileRead = fileReader => {
    const fileText = fileReader.result;
    const moviesList = parseDocument(fileText);

    this.setMoviesToDatabase(moviesList);
  };

  handleFileChosen = file => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.handleFileRead(fileReader);
    };
    fileReader.readAsText(file);
  };
  prepareDataForDb = data => {
    let preparedData = {};
    data.forEach(item => {
      preparedData[item.id] = item;
    });
    return preparedData;
  };
  setMoviesToDatabase = movies => {
    const moviesDbView = this.prepareDataForDb(movies);
    const { addMoviesToStore, moviesInStore } = this.props;
    firebase
      .database()
      .ref("/movies")
      .update(moviesDbView)
      .then(() => {
        addMoviesToStore([...moviesInStore, ...movies]);
      });
  };

  render() {
    return (
      <label className="btn btn-success upload">
        <input
          type="file"
          id="file"
          className="input-file"
          accept=".txt"
          onChange={e => this.handleFileChosen(e.target.files[0])}
        />
        Upload
      </label>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return {
    moviesInStore: movies
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
)(UploadFile);
