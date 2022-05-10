import { useState, useEffect } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { getMovie } from "services/movies-api";
import { Article, Image, Description, ItemTitle,
        Header, Text, TextGenres, Navigation, Additional, Link 
        } from './MovieDetailsPage.styled';

export const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [item, setItem ] = useState(null);
    const location = useLocation();

    useEffect(() => {
        async function fetchMovie() {
            try {
                const item = await getMovie(movieId);
                setItem(item)
            } catch (error) {}
        }
        fetchMovie();
    }, [movieId]);

    return (
        <main>
            <Link to={location?.state?.from ?? '/'}>Go back</Link>
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
                            <TextGenres key={genre.id}>{genre.name}<br/></TextGenres>
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