import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getTrendingMovies } from "services/movies-api";
import { Loader } from "components/Loader";

const useFetchTrandingMovies = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchTrandingMovies () {
            setLoading(true);
            try {
                const items = await getTrendingMovies()
                setItems(items)
            } catch (error) {
            } finally {
                setLoading(false);
            }
        }
        fetchTrandingMovies();
    }, []);
        console.log(items)
    return { items, loading };
}

export const HomePage = () => {
    const { items, loading } = useFetchTrandingMovies();

    return (
        <main>
            <h1>Trending today</h1>
            {loading && <Loader />}
            <ul>
                {items.map(item =>
                    <li key={item.id}>
                        <Link to={`/movies/${item.id}`}>{item.title}</Link>
                    </li>
                )}
            </ul>
        </main>
    );
}