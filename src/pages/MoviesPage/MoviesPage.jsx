import { getSearchMovie } from 'services/movies-api';
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { Form, Input, Button, List, Link, Item } from './MoviesPage.styled';

export const MoviesPage = () => {
    const [movies, setMovies] = useState('')
    const [searchParams, setSearchParams] = useSearchParams('');
    const query = searchParams.get('query');

    useEffect(() => {
        if (query === null) {
            return
        }
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
        <main>
        <Form onSubmit={handleSubmit}>
            <Input type="text" name="query"></Input>
            <Button type="submit">Search</Button>
        </Form>

        {movies && (
            <>
                {movies && (
                    <List>
                        {movies.map(movie => (
                            <Item key={movie.id}>
                                <Link to={`${movie.id}`}>{movie.title}</Link>
                            </Item>
                        ))}
                    </List>
                
                )}
            </>
        )}
        </main>
    );
}