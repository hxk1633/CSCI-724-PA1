import React from 'react';
import { ReviewItem } from './ReviewItem';
import { Row } from 'react-bootstrap';

export const ReviewList = ({reviews}) => {
    const renderedReviews =  reviews.map((review, index) => {
        return <ReviewItem key={index} review={review}/>
    });

    return (
        <Row>
            {renderedReviews}
        </Row>
    );
}