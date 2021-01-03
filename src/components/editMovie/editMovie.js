import React, { Component } from "react";
import PropTypes from "prop-types";

import { Modal, Button } from "react-bootstrap";

import constants from "../../constants/constants";

const {
  EDIT_MOVIE_DETAILS,
  ADD_MOVIE_TITLE,
  ADD_MOVIE_YEAR,
  MOVIE_POSTER,
  UPDATE_MOVIE,
  CLOSE
} = constants;

class EditMovie extends Component {
  
  constructor() {
    super();


    this.state = {
      Title: '',
      Year: '',
      Poster: ''
    }

    this.handleUpdateButton = this.handleUpdateButton.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangePoster = this.onChangePoster.bind(this);
  }
//state variable from props.. parent components coming
  componentDidMount() {
    const { movie } = this.props;
    this.setState({
      Title: movie.Title,
      Year: movie.Year,
      Poster: movie.Poster
    });
  }
//update button clicks
  handleUpdateButton() {
    const {handleUpdate, movie} = this.props;
    const { Title, Year, Poster } = this.state;

    handleUpdate({
      _id: movie._id,
      Title,
      Year,
      Poster
    })
  }
//chnage the movie title 
  onChangeTitle(e) {
    this.setState({
        Title: e.target.value
    });
  }
  //change the movie year
  onChangeYear(e) {
      this.setState({
          Year: e.target.value
      });
  }
  // change the movie poster
  onChangePoster(e) {
      this.setState({
          Poster: e.target.value
      })
  }

  render () {
    const { handleClose, visible } = this.props;
    const { Title, Year, Poster } = this.state;
    
    return (
      <Modal show={visible}>
        <Modal.Header closeButton>
          <Modal.Title>{ EDIT_MOVIE_DETAILS }</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>{ ADD_MOVIE_TITLE }</label>
                <input type='text'
                    className='form-control'
                    value={Title}
                    onChange={this.onChangeTitle}></input>
            </div>
            <div className="form-group">
                <label>{ ADD_MOVIE_YEAR }</label>
                <input type='text'
                    className='form-control'
                    value={Year}
                    onChange={this.onChangeYear}></input>
            </div>
            <div className='form-group'>
                <label>{ MOVIE_POSTER }</label>
                <textarea type='text'
                    className='form-control'
                    value={Poster}
                    onChange={this.onChangePoster}>
                </textarea>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>{CLOSE}</Button>
          <br/>
          <Button
            className='btn btn-primary'
            disabled={
                Title === "" ||
                Year === "" ||
                Poster === ""
            }
            onClick={this.handleUpdateButton}
        >
            { UPDATE_MOVIE }
        </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

EditMovie.propTypes = {
  visible: PropTypes.bool,
  movie: PropTypes.object,
  handleClose: PropTypes.func,
  handleUpdate: PropTypes.func
}

export default EditMovie;
