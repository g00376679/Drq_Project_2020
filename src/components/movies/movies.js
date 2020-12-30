import React, { Component } from 'react';
import PropTypes from "prop-types";

import MovieItem from '../movieItem/movieItem';

class Movies extends Component {

    render(){
        // Destructing of props
        const { movies, ReloadData } = this.props;

        return movies.map(movie => {
            return (
                <MovieItem
                    movie={movie}
                    ReloadData={ReloadData}
                />
            );
        })
    }
}

// passing data from and to parent and child component
Movies.propTypes = {
    movie: PropTypes.array,
    ReloadData: PropTypes.func
}

export default Movies;
