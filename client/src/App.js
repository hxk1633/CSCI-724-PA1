import React, { useState } from 'react';
import './App.scss';
import omdb from './rest-services/omdb';
import nytreviews from './rest-services/nytreviews';
import { SearchBar } from './components/SearchBar';
import { MovieList } from './components/MovieList';
import { MovieDetails } from './components/MovieDetails';
import { ReviewList } from './components/ReviewList';
import { Container, Col, Row, Tabs, Tab, Spinner } from 'react-bootstrap';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);
  const [errorReviews, setErrorReviews] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [key, setKey] = useState('movies');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (term) => {
    setError(null);
    setErrorReviews(null);
    setLoading(true);
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
      if (nytResponse.data.results === null) {
        setReviews([]);
        setErrorReviews("No reviews...");
      } else {
        setReviews(nytResponse.data.results);
      }
    }
    setLoading(false);
  };

  const handleMovieSelect = async (movie) => {
    const response1 = await omdb.get('/', {
      params: {
          i: movie.imdbID,
      }
    })
   
    console.log(response1.data);
    setShow(true);
    setSelectedMovie(response1.data);
  }

  const handleClose = () => setShow(false);

  return (
    <Container style={{padding: '35px'}}>
      <Row>
        <SearchBar handleFormSubmit={handleSubmit}/>
      </Row>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3">
        <Tab eventKey="movies" title="Movies">
          {loading ? <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> :
          <MovieList handleMovieSelect={handleMovieSelect} movies={movies}/>}
          {error && (<h3>{error.Error}</h3>)}
        </Tab>
        <Tab eventKey="reviews" title="Reviews">
          {loading ? <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> : <ReviewList reviews={reviews}/>}
          {errorReviews && (<h3>{errorReviews}</h3>)}
        </Tab>
      </Tabs>
      {selectedMovie && <MovieDetails show={show} movie={selectedMovie} handleClose={handleClose}/>}
    </Container>
   
  )
}

export default App;
