import React, { Component } from 'react';
import axios from 'axios';
import {Button} from "react-bootstrap";

import constants from "../../constants/constants";

import "./create.css";

// Destructing of constants
const {
    API_URL,
    ADD_MOVIE,
    ADD_MOVIE_TITLE,
    ADD_MOVIE_YEAR,
    MOVIE_POSTER
} = constants;

class Create extends Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const { Title, Year, Poster } = this.state;
        const newMovie = {
            Title,
            Year,
            Poster
        };

        axios.post(`${API_URL}api/movies`, newMovie)
            .then(response => {
                this.setState({
                    Title: '',
                    Year: '',
                    Poster: ''
                });
                console.log(response.data)
            })
            .catch(error => console.log(error));    

    }

    render() {
        // Destructing of a state variable
        const { Title, Year, Poster } = this.state;

        return (
            <div className="createContainer">
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


                    <div className="form-group">
                        <Button
                            className='btn btn-primary'
                            disabled={
                                Title === "" ||
                                Year === "" ||
                                Poster === ""
                            }
                            onClick={this.onSubmit}
                        >
                            { ADD_MOVIE }
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Create;