import React, { Component } from 'react';
import axios from 'axios';

import Movies from '../../components/movies/movies';
import constants from "../../constants/constants";

// Destructing of constants
const { API_URL } = constants;

class Read extends Component {

    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        movies: []
    };

    ReloadData(){
        axios.get(`${API_URL}api/movies`)
            .then((response) => {
                this.setState({ movies: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    componentDidMount() {
        axios.get(`${API_URL}api/movies`)
            .then((response) => {
                this.setState({ movies: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        //Destructing of a variable
        const { movies } = this.state;

        return (
            <div>
                {
                    // condition added for checking the movies array
                    movies.length ?
                        <Movies
                            movies={movies}
                            ReloadData={this.ReloadData}
                        /> :
                        <>
                            <h1></h1>
                            <h2>No movie yet</h2>
                        </>
                }            
            </div>
        );
    }
}

export default Read;

