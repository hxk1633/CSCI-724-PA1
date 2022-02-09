import React, { useState } from 'react';
import './App.scss';
import omdb from './services/omdb';
import nytreviews from './services/nytreviews';
import { SearchBar } from './components/SearchBar';
import { MovieList } from './components/MovieList';
import { MovieDetails } from './components/MovieDetails';
import { ReviewList } from './components/ReviewList';
import { Container, Row, Tabs, Tab, Spinner } from 'react-bootstrap';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [error, setError] = useState(null);
  const [errorReviews, setErrorReviews] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [key, setKey] = useState('movies');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [countryFlags, setCountryFlags] = useState([]);
  
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
    if (response.data.Response === "True") {
      setError(null);
      setMovies(response.data.Search);
    } else {
      setMovies([]);
      setError(response.data);
    }
    if (nytResponse.data.status === "OK") {
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
    setLoadingDetails(true);
    setShow(true);

    let countries = "";
    let responseArray = [];

    const response = await omdb.get('/', {
      params: {
          i: movie.imdbID,
      }
    })

    if (response.data.Country.includes("USA")) {
      countries = response.data.Country.replace("USA", "United States").split(',');
    } else {
      countries = response.data.Country.split(',');
    }

    for (var i = 0; i < countries.length; i++) {
      let countryResponse = await axios.get('/api/flag', {
        params: {
          country: countries[i].trim()
        }
      })
      responseArray.push({name: countries[i].trim(), image: countryResponse.data});
    }
   
    console.log("Country Response Array: " + JSON.stringify(responseArray));
    console.log(response.data);
    setSelectedMovie(response.data);
    setCountryFlags(responseArray);
    setLoadingDetails(false);
  }

  const handleClose = () => setShow(false);

  return (
    <>
    <div className="p-3 mb-2 bg-primary text-white text-center">
      <h1>Movie Search Engine</h1>
    </div>
    <Container style={{padding: '35px'}}>
      <Row>
        <SearchBar handleFormSubmit={handleSubmit}/>
      </Row>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 mt-3">
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
      <MovieDetails show={show} movie={selectedMovie} flags={countryFlags} handleClose={handleClose} loading={loadingDetails}/>
    </Container>
   </>
  )
}

export default App;
