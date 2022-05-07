import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCast } from 'services/movies-api'

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
        <>
            {actors.map(actor =>
                <li key={actor.id}>
                    <img src={'https://image.tmdb.org/t/p/w500/' + actor.profile_path} alt={actor.name} />
                    <h2>{actor.name}</h2>
                    <p>Character: {actor.character}</p>
                </li>
            )}
        </>
    )
}