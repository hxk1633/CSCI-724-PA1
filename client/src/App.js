import React, { useState } from 'react';
import './App.scss';
import omdb from './rest-services/omdb';
import nytreviews from './rest-services/nytreviews';
import { SearchBar } from './components/SearchBar';
import { MovieList } from './components/MovieList';
import { MovieDetails } from './components/MovieDetails';
import { ReviewList } from './components/ReviewList';
import { Container, Col, Row } from 'react-bootstrap';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  
  const handleSubmit = async (term) => {
    const response = await omdb.get('/', {
        params: {
            s: term,
        }
    })
    const nytResponse = await nytreviews.get('/search.json', {
      params: {
          query: term,
      }
    })
    console.log(nytResponse.data);
    console.log(response.data.Search);
    if (response.data.Response == "True") {
      setError(null);
      setMovies(response.data.Search);
    } else {
      setMovies([]);
      setError(response.data);
    }
    if (nytResponse.data.status == "OK") {
      setReviews(nytResponse.data.results);
    }
  };

  const handleMovieSelect = async (movie) => {
    const response1 = await omdb.get('/', {
      params: {
          i: movie.imdbID,
      }
    })
    console.log(response1.data);
    setSelectedMovie(response1.data);
  }

  return (
    <Container>
      <Row>
        <SearchBar handleFormSubmit={handleSubmit}/>
      </Row>
      <Row>
        {error && (<h3>{error.Error}</h3>)}
      </Row>
      <Row>
        <Col>
          <ReviewList reviews={reviews}/>
        </Col>
        <Col>
          <MovieList handleMovieSelect={handleMovieSelect} movies={movies}/>
        </Col>
        <Col>
          <MovieDetails movie={selectedMovie}/>
        </Col>
      </Row>
    </Container>
   
  )
}

export default App;
