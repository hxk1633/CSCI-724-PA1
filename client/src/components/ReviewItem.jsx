import React from 'react';

export const ReviewItem = ({review}) => {
    return (
        <div>
           <h2>{review["display_title"]}</h2>
           <p>{review["mpaa_rating"]}</p>
           <p>{review["critics_pick"]}</p>
           <p>{review.byline}</p>
           <p>{review.headline}</p>
           <p>{review["summary_short"]}</p>
           <p>{review["publication_date"]}</p>
           <p>{review["opening_date"]}</p>
           <p>{review["date_updated"]}</p>
           {/* <p>{review.link}</p>
           <p>{review.multimedia}</p> */}
        </div>
    )
}