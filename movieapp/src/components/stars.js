import { useState } from 'react';


const Star = (props) => {
    // State management for rating and hover state
    const [rating, setRating] = useState(0);

    // Calculate the average rating based on the array of ratings passed as props
    const averageRating = Math.floor(props.rating.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / props.rating.length)
    const [hover, setHover] = useState(0);

    // State management for the number of ratings
    const [numberOfRatings, setNumberOfRatings] = useState(props.rating.length)

    return (
        <div className='star-rating'>
            {[...Array(5)].map((star, index) => {
                index += 1; // Increase the index by 1 to start from 1, not 0.
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (rating || hover) ? "on" : "off"}
                        onClick={() => {
                            setRating(index);
                            if (rating === 0) setNumberOfRatings(numberOfRatings + 1);
                        }}
                        onMouseEnter={() => {
                            setHover(index);
                        }}
                        onMouseLeave={() => setHover(0)}
                    >
                        {/* Display a filled star if it's rated or if it's hovered, otherwise display an empty star */}
                        {((index <= averageRating) || (index <= rating)) ? <span className="star">&#9733</span> : <span className="star">&#9734</span>}
                    </button>
                );
            })}
            <span>{numberOfRatings}</span> {/* Display the total number of ratings. */}
        </div>
    );
};

export default Star;
