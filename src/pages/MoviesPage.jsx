import { getSearchMovie } from 'services/movies-api';
import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom';

export const MoviesPage = () => {
    const [movies, setMovies] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    useEffect(() => {
        async function fetchSearchMovie() {
            try {
                const response = await getSearchMovie(query);
                setMovies(response);
            } catch(error) {
                console.log('Error');
            }
        }
        fetchSearchMovie();
    }, [query])

    console.log(movies);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ query: e.currentTarget.elements.query.value.trim() });

    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="query"></input>
            <button type="submit">Search</button>
        </form>

        {movies && (
            <>
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`${movie.id}`}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>
            </>
        )}
        </>
    );
}