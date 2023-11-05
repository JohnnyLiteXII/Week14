import React from "react";

export default class Review extends React.Component {

    render() {

        const { name, review } = this.props;

        return (
            <div>
                <p><strong>{name}</strong></p>
                <p>{review}</p>
            </div>
        )

    }
}