import React from "react";

export default class ReviewForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '', // Initialize name in state
            review: '' // Initialize review in state
        };
    }

    handleReviewChange = (event) => {
        // Update state based on the input field's name
        if (event.target.name === "review") {
            this.setState({ review: event.target.value });
        } else if (event.target.name === "name") {
            this.setState({ name: event.target.value });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting
        // Call the onSubmit function with the current review and name from state
        this.props.onSubmit({ review: this.state.review, name: this.state.name });
        // Clear the review and name fields in state
        this.setState({ review: '' });
        this.setState({ name: '' });
    }

    render() {
        const { review } = this.state;
        const { name } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <textarea
                        type="text"
                        placeholder="Enter a review"
                        value={review}
                        onChange={this.handleReviewChange}
                        className="col"
                        name="review"
                    />
                </div>
                <div className="row">
                    <input
                        type="text"
                        id="username"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={this.handleReviewChange}
                        className="col"
                    />
                    <button type="submit" className="review btn btn-primary">Review</button>
                </div>
            </form>
        );
    }
}
