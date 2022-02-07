import React from 'react';

export const MovieItem = ({movie, handleMovieSelect}) => {
    return (
        <div onClick={ () => handleMovieSelect(movie)} className=' movie-item item'>
            <img className='ui image' src={movie.Poster} alt={movie.Title}/>
            <div className='content'>
                <div className='header'>{movie.Title}</div>
                <div className='year'>{movie.Year}</div>
                <div className='type'>{movie.Type}</div>
            </div>
        </div>
    )
}