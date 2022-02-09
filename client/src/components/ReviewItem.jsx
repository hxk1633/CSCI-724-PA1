import React from 'react';
import { Card, Col, Badge } from 'react-bootstrap';


export const ReviewItem = ({review}) => {
    const handleClick = () => {
        window.open(review.link.url, "_blank");
    }
    return (
        <Col style={{margin: '20px 0', cursor: 'pointer'}} lg={4}>
            <Card onClick={handleClick}>
                <Card.Img variant="top" src={review.multimedia === null ? 'https://via.placeholder.com/150/000000/FFFFFF?text=No+Image' : review.multimedia.src}/>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{review["display_title"]} <Badge bg="info">{review["mpaa_rating"]}</Badge></Card.Subtitle>
                    <Card.Title>{review.headline}</Card.Title>
                    {review["critics_pick"] === 1 ? <Card.Subtitle className="mb-2">Critics' Pick</Card.Subtitle> : null}
                    <Card.Text>
                        {review["summary_short"]}
                    </Card.Text>
                    <Card.Text>
                        {review.byline}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated {review["date_updated"]}</small>
                </Card.Footer>
            </Card>
        </Col>
    )
}