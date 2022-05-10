import { useEffect, useState } from "react";
import { getTrendingMovies } from "services/movies-api";
import { Loader } from "components/Loader";
import { Header, List, Link, Item } from './HomePage.style';

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

    return { items, loading };
}

export const HomePage = () => {
    const { items, loading } = useFetchTrandingMovies();

    return (
        <main>
            <Header>Trending today</Header>
            {loading && <Loader />}
            <List>
                {items.map(item =>
                    <Item key={item.id}>
                        <Link to={`/movies/${item.id}`}>{item.title}</Link>
                    </Item>
                )}
            </List>
        </main>
    );
}