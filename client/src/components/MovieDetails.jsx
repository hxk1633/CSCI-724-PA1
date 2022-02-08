import React from 'react';
import { Modal, Button, Container, Col, Row, Image, Badge } from 'react-bootstrap';

export const MovieDetails = ({movie, show, handleClose}) => {
    // if (!movie) {
    //     return <div>Loading ...</div>;
    // }

    return (
        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container fluid>
                    <Row>
                        <Col lg={5}>
                            <Image src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/150/000000/FFFFFF?text=No+Poster' : movie.Poster}/>
                        </Col>
                        <Col>
                            <h2>{movie.Title}</h2>
                            <Badge bg="info">{movie.Rated}</Badge> <Badge bg="info">{movie.Runtime}</Badge> <Badge bg="info">{movie.Genre}</Badge>
                            <p style={{marginTop: 20}}>{movie.Plot}</p>
                        </Col>
                    </Row>
                </Container>
                {/* <h3>Released: {movie.Released}</h3>
                <h3>Director: {movie.Director}</h3>
                <h3>Writer: {movie.Writer}</h3>
                <h3>Actors: {movie.Actors}</h3>
                <p>Plot: {movie.Plot}</p>
                <h5>Language: {movie.Language}</h5>
                <h5>Country: {movie.Country}</h5>
                <h5>Awards: {movie.Awards}</h5> */}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
}