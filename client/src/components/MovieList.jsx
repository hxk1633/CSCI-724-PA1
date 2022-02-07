import React from 'react';
import { MovieItem } from './MovieItem';

export const MovieList = ({movies, handleMovieSelect}) => {
    const renderedMovies =  movies.map((movie) => {
        return <MovieItem key={movie.imdbID} movie={movie} handleMovieSelect={handleMovieSelect} />
    });

    return <div className='ui relaxed divided list'>{renderedMovies}</div>;
}