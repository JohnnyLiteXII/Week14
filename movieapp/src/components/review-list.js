import React from "react";
import Review from "./review";

export default class ReviewList extends React.Component {
    render() {
        // Extract the "reviews" prop from the component's props.
        const { reviews } = this.props;

        return (
            // Render a card element for the review list with a title.
            <div className="card review-list">
                <h4>Reviews:</h4>

                <div className="mb-2 text-black">
                    {reviews.map((reviewInfo, index) => 
                        // Map over the "reviews" array and render a "Review" component for each review.
                        <Review
                            key={index} // Use the index as a unique key for React.
                            name={reviewInfo.name} // Pass the name as a prop to the "Review" component.
                            review={reviewInfo.review} // Pass the review content as a prop.
                            rating={reviewInfo.rating} // Pass the rating as a prop.
                        />
                    )}
                </div>
            </div>
        );
    }
}
