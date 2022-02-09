import React from 'react';
import { Modal, Button, Container, Col, Row, Image, Badge, Spinner } from 'react-bootstrap';

export const MovieDetails = ({movie, show, handleClose, flags, loading}) => {
    
    const renderedFlags =  flags.map((flag) => {
        return <Image src={flag} src={flag.name === 'Soviet Union' ? 'https://via.placeholder.com/400x250/FF0000/000000/?text=Soviet+Union+Not+Found' : flag.image} height="40" style={{marginRight: '15px'}}/>
    });

    return (
        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Details</Modal.Title>
            </Modal.Header>
            { loading ? <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> :
            <Modal.Body>
                <Container fluid>
                    <Row>
                        <Col lg={5}>
                            <Image src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/150/000000/FFFFFF?text=No+Poster' : movie.Poster}/>
                        </Col>
                        <Col>
                            <h2>{movie.Title}</h2>
                            <Badge bg="info">{movie.Rated}</Badge> <Badge bg="info">{movie.Runtime}</Badge> <Badge bg="info">{movie.Genre}</Badge>
                            <div className='mt-3'>
                                {renderedFlags}
                                <h6 className='text-muted mt-2'>{movie.Country}</h6>
                            </div>
                            <p className="lead">{movie.Plot}</p>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>}
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
}