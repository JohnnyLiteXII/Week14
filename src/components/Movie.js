import React from "react";
import Stars from "./stars";
import ReviewList from "./review-list";
import ReviewForm from "./review-form";

export default class Movie extends React.Component {
constructor(props) {
    super(props);
    console.log('this is my props:', props) 
    // Initialize the component state with reviews and rating from props
    this.state = {
    reviews: props.reviews,
    rating: props.rating
    };
}

  // Handle a star rating click event by passing it up to the parent component

handleStartClick = (selectedStars) => {
    this.props.onStarClick(selectedStars);
}

  // Handle a review form submission

handleReviewSubmit = (review) => {
    // Create a new review object and log it
    const newReview = { reviews: this.state.reviews, rating: this.state.rating }
    console.log(newReview)

    // Update the component state with the new review
    this.setState(prevState => ({
    reviews: [...prevState.reviews, review]
    }));
}

render() {
    // Determine the default review content
    const defaultReview = this.state.reviews.length > 0 ? this.state.reviews : { name: '', review: '' };
    console.log(this.props.rating)
    return(
    <div className="card mb-4">
        <div className="row no-gutters">
        <div className="col-md-4">
            <div className="d-flex justify-content-center">
            <img src={this.props.image} className="card-img" alt={this.props.title} />
            </div>
        </div>
        <div className="col-xl-8">
            <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.synopsis}</p>
            <h5 className="text-rating">Rating: <Stars rating={this.props.rating} /></h5>
            <ReviewList reviews={defaultReview}/>
            <ReviewForm onSubmit={this.handleReviewSubmit}/> 
            </div>
        </div>
        </div>
    </div>
    );
}
}
