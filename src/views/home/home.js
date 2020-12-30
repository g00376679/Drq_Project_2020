import React, { Component } from 'react';

import MovieItem from "../../components/movieItem/movieItem";

import staticMovieList from "../../data/staticMovie";
import constants from "../../constants/constants";

const { WELCOME_MESSAGE } = constants;

class Home extends Component {
    constructor() {
        super();

        this.state = {
            time: new Date().toLocaleTimeString()
        };
    }

    componentDidMount() {
        // 1000 ==> 1 sec
        this.interval = setInterval(() => this.setState({ time: new Date().toLocaleTimeString() }), 1000);
    }

    // on changing of a page timer will be destroyed
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { time } = this.state;
        return (
            <div>
                <h1>
                    { WELCOME_MESSAGE }
                </h1>
                <h2>Time is now: {time}</h2>
                {
                    staticMovieList.length &&
                    <div>
                        {
                            staticMovieList.map(movie => (
                                <MovieItem
                                    key={movie.Title}
                                    movie={movie}
                                />
                            ))
                        }
                        
                    </div>
                }
            </div>
        );
    }
}

export default Home;