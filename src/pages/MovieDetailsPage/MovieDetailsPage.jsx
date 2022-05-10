import { useState, useEffect } from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import { getMovie } from "services/movies-api";
import { Button, Article, Image, Description, ItemTitle,
        Header, Text, TextGenres, Navigation, Additional, Link 
        } from './MovieDetailsPage.styled';

export const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const [item, setItem ] = useState(null);

    useEffect(() => {
        async function fetchMovie() {
            try {
                const item = await getMovie(movieId);
                setItem(item)
            } catch (error) {}
        }
        fetchMovie();
    }, [movieId]);

    const goBack = () => {
        navigate('/');
    }

    console.log(item);

    return (
        <main>
            <Button
                onClick={goBack}
            >
                Go back
            </Button>
            {item && 
                <Article>
                    <Image 
                        src={'https://image.tmdb.org/t/p/w500/' + item.poster_path}
                        alt={item.title}
                    />
                    <Description>
                        <ItemTitle>{item.title} ({item.release_date.substr(0, 4)})</ItemTitle>
                        <Text>User Score: {item.vote_average * 10}%</Text>
                        <Header>Overview</Header>
                        <Text>{item.overview}</Text>
                        <Header>Genres</Header>
                        {item.genres.map(genre => (
                            <TextGenres key={genre.id}>{genre.name}</TextGenres>
                        ))}
                    </Description>
                </Article>
            }

            <Navigation>
                <Additional>Additional information</Additional>
                <Link to='cast'>Cast</Link>
                <Link to='reviews'>Reviews</Link>
            </Navigation>
            <Outlet />
        </main>
    )
}