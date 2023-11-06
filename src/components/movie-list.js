import React from 'react';
import Movie from './Movie';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {
                    id: 1,
                    title: 'Wanted',
                    rating: [0],
                    synopsis: "A frustrated office worker discovers that he is the son of a professional assassin, and that he shares his father's superhuman killing abilities.",
                    image: 'https://upload.wikimedia.org/wikipedia/en/9/98/Wanted_film_poster.jpg',
                    reviews: [
                        {
                            name: 'James Bond',
                            review: "I really enjoyed the movie."
                        },
                        {
                            name: 'Sam Smith',
                            review: "My favorite movie!"
                        },
                    ],
                },
                {
                    id: 2,
                    title: 'Iron Man',
                    rating: [1, 1],
                    synopsis: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
                    image: 'https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg',
                    reviews: [
                        {
                            name: 'Rick James',
                            review: "BEST MARVEL MOVIE!"
                        },
                        {
                            name: 'John Doe',
                            review: "I love Marvel Movies!"
                        },
                    ]
                },
            ]
        };
    }

    handleMovieReview = (movieId, review) => {
        // Update the reviews of a specific movie.
        const updatedMovies = this.state.movies.map(movie => {
            if (movie.id === movieId) {
                return {
                    ...movie,
                    reviews: [...movie.reviews, review]
                };
            }
            return movie;
        });
        this.setState({ movies: updatedMovies });
    }

    render() {
        // Map movie data to Movie components
        const movies = this.state.movies.map(movie => (
            <Movie
                key={movie.id}
                title={movie.title}
                image={movie.image}
                synopsis={movie.synopsis}
                rating={movie.rating}
                reviews={movie.reviews}
            />
        ));
        return <div>{movies}</div>;
    }
}
