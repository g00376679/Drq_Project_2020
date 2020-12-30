import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from "prop-types";

import { Card , Button } from 'react-bootstrap';

import constants from "../../constants/constants";

import "./style.css";

const {
    API_URL,
    IMAGE_NOT_FOUND,
    DELETE
} = constants;
class MovieItem extends Component {

    constructor() {
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

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

    render() {
        // --- Destructing of a variable (props)
        const { movie } = this.props;
        const { Title, Poster, Year, _id } = movie;

        return (
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
                        <Button variant="danger" onClick={this.DeleteMovie}>
                            { DELETE }
                        </Button> : null
                    }
                    
                </Card>
            </div>
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