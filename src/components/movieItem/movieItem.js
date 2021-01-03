import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from "prop-types";

import { Card , Button } from 'react-bootstrap';

import EditMovie from "../editMovie/editMovie";

import constants from "../../constants/constants";

import "./style.css";

const {
    API_URL,
    IMAGE_NOT_FOUND,
    DELETE,
    EDIT
} = constants;
class MovieItem extends Component {

    constructor() {
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
        this.editMovie = this.editMovie.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);

        this.state = {
            editModalVisible: false
        }
    }
// use for editmovie model
    editMovie() {
        this.setState({
            editModalVisible: true
        });
    }
// for close movie model
    handleClose() {
        this.setState({
            editModalVisible: false
        });
    }
// for deleting the movie
// via api call
    DeleteMovie(e) {
        const { movie } = this.props;

        e.preventDefault();
        axios.delete(`${API_URL}api/movies/${movie._id}`)
        .then(()=>{
            const { ReloadData } = this.props;
            
            ReloadData();
        })
        .catch((err)=>{
            console.log(err);
        });
    }
// this is for movie update
    handleUpdate(movieData) {
        axios.put(`${API_URL}api/updateMovie`, movieData)
        .then(()=>{
            const { ReloadData } = this.props;
            ReloadData();
            this.handleClose();
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render() {
        // --- Destructing of a variable (props)
        const { movie } = this.props;
        const { Title, Poster, Year, _id } = movie;
        const { editModalVisible } = this.state;

        // <> = to react.fragment to get a single parent
        return (
            <> 
                <div className="movieItemContainer">
                    <Card>
                        <Card.Header>{Title}</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <img
                                    src={Poster}
                                    width="150"
                                    height="200"
                                    alt={IMAGE_NOT_FOUND}
                                />
                                <footer className="blockquote-footer">
                                    {Year}
                                </footer>
                            </blockquote>
                        </Card.Body>
                        {
                            _id ?
                            <>
                                <Button variant="danger" onClick={this.editMovie}>
                                    { EDIT }
                                </Button>
                                <br />
                                <Button variant="danger" onClick={this.DeleteMovie}>
                                    { DELETE }
                                </Button>
                            </>: null
                        }
                        
                    </Card>
                </div>
                {
                    editModalVisible &&
                    <EditMovie
                        visible={editModalVisible}
                        movie={this.props.movie}
                        handleClose={this.handleClose}
                        handleUpdate={this.handleUpdate}
                    />
                }
            </>
        );
    }
}

MovieItem.propTypes = {
    movie: PropTypes.object,
    ReloadData: PropTypes.func
}

MovieItem.defaultProps = {
    ReloadData: () => {}
};

export default MovieItem;