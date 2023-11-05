import React from "react";
import Review from "./review";

export default class ReviewList extends React.Component {

    render() {
        const { reviews } = this.props;

        return (
            <div className="card review-list">
                <h4>Reviews:</h4>
                <div className="mb-2 text-black">
                    {reviews.map((reviewInfo, index) => 
                        <Review
                            key={index}
                            name={reviewInfo.name}
                            review={reviewInfo.review}
                            rating={reviewInfo.rating} />
                    )}
                </div>
            </div>
        );
    }
}
