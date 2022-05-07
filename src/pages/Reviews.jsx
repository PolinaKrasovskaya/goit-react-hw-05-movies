import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReviews } from 'services/movies-api'

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response= await getReviews(movieId);
                setReviews(response);
            } catch (error) {
                console.log('Error!')
            }
        }
        fetchReviews()
    }, [movieId])

    console.log(reviews);

    return (
        <>
            {reviews.map(review =>
                <li key={review.id}>
                    <h2>Author: {review.author}</h2>
                    <p>{review.content}</p>
                </li>
            )}
        </>
    )
}