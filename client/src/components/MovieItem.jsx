import React from 'react';
import { 
    Col, 
    Card,
} from 'react-bootstrap';

export const MovieItem = ({movie, handleMovieSelect}) => {

    return (
        <Col onClick={ () => handleMovieSelect(movie)} style={{margin: '20px 0', cursor: 'pointer'}} lg={2}>
            <Card>
                <Card.Img alt={movie.Title} variant='top' src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/150/000000/FFFFFF?text=No+Poster' : movie.Poster}/>
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Subtitle>({movie.Year})</Card.Subtitle>
                </Card.Body>
            </Card>
         </Col>
    )
}