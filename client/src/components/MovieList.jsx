import React from 'react';
import { MovieItem } from './MovieItem';
import { Row } from 'react-bootstrap';

export const MovieList = ({movies, handleMovieSelect}) => {
    const renderedMovies =  movies.map((movie, index) => {
        return <MovieItem key={index} movie={movie} handleMovieSelect={handleMovieSelect} />
    });

    return (
        <Row>
            {renderedMovies}
        </Row>
    );
}