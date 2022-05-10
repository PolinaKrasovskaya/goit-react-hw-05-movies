import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCast } from 'services/movies-api';
import { List, Item, Image, Header, Text, Name } from './Cast.styled';
import defaultImg from 'images/default.png';

export const Cast = () => {
    const { movieId } = useParams();
    const [actors, setActors] = useState([]);

    useEffect(() => {
        async function fetchCast() {
            try {
                const response= await getCast(movieId);
                setActors(response);
            } catch (error) {
                console.log('Error!')
            }
        }
        fetchCast()
    }, [movieId])

    console.log(actors);

    return (
        <List>
            {actors.map(actor =>
                <Item key={actor.id}>
                    <Image src={actor.profile_path
                        ? 'https://image.tmdb.org/t/p/w500/' + actor.profile_path
                        : defaultImg
                        }
                        alt={actor.name}
                        onerror="this.src='images/default.png"
                    />
                    <Name>{actor.name}</Name>
                    <Text><Header>Character: </Header>{actor.character}</Text>
                </Item>
            )}
        </List>
    )
}