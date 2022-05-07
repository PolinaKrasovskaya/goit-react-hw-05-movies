import { useState, useEffect } from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import { Publication } from 'components/Publication'
import { getMovie } from "services/movies-api";
import { Link } from './MovieDetailsPage.styled';

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

    return (
        <main>
            <button
                onClick={goBack}
            >
                Go back
            </button>
            {item && <Publication item={item}/>}

            <nav>
                <Link to='cast'>Cast</Link>
                <Link to='reviews'>Reviews</Link>
            </nav>
            <Outlet />
        </main>
    )
}