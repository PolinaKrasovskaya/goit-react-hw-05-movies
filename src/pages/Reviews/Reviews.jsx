import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReviews } from 'services/movies-api';
import { List, Item, Header, Text } from './Reviews.styled';

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
        <List>
            {reviews.map(review =>
                <Item key={review.id}>
                    <Header>Author: {review.author}</Header>
                    <Text>{review.content}</Text>
                </Item>
            )}
        </List>
    )
}