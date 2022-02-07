import React from 'react';
import { ReviewItem } from './ReviewItem';

export const ReviewList = ({reviews}) => {
    const renderedReviews =  reviews.map((review) => {
        return <ReviewItem review={review}/>
    });

    return <div className='ui relaxed divided list'>{renderedReviews}</div>;
}