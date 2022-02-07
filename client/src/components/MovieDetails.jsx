import React from 'react';

export const MovieDetails = ({movie}) => {
    // if (!movie) {
    //     return <div>Loading ...</div>;
    // }

    return (
        <div>
            {movie && 
            ( <div>
                <div>
                    <img src={movie.Poster} alt={movie.Title}/>
                </div>
                <div>
                    <h3>Rated: {movie.Rated}</h3>
                    <h3>Released: {movie.Released}</h3>
                    <h3>Runtime: {movie.Runtime}</h3>
                    <h3>Genre: {movie.Genre}</h3>
                    <h3>Director: {movie.Director}</h3>
                    <h3>Writer: {movie.Writer}</h3>
                    <h3>Actors: {movie.Actors}</h3>
                    <p>Plot: {movie.Plot}</p>
                    <h5>Language: {movie.Language}</h5>
                    <h5>Country: {movie.Country}</h5>
                    <h5>Awards: {movie.Awards}</h5>
                </div>
            </div>
            )}
        </div>
    )
}