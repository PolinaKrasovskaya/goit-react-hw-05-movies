import { getSearchMovie } from 'services/movies-api';
import { useEffect, useState } from 'react'
import { useSearchParams, useLocation } from 'react-router-dom';
import { Form, Input, Button, List, Link, Item } from './MoviesPage.styled';
import toast, { Toaster } from 'react-hot-toast';

export const MoviesPage = () => {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const location = useLocation();

    useEffect(() => {
        if (!query) {
            return;
        }

        async function fetchSearchMovie() {
            try {
                const response = await getSearchMovie(query);
                setMovies(response);
            } catch(error) {
                return toast({error});
            }
        }
        fetchSearchMovie();
        return
    }, [query])

    const handleSubmit = e => {
        e.preventDefault();        
    
        if (search.trim() === '') {
            return toast.error("Search field can't be empty!");
        }
        setSearchParams({ query: search });
        setSearch('')
        // e.currentTarget.reset();
    }
    
    const handleChange = event => {
        const searchQuery = event.currentTarget.value.toLowerCase();
        setSearch(searchQuery);       
    };

    return (
        <main>
        <Form onSubmit={handleSubmit}>
            <Input onChange={handleChange} value={search} type="text"></Input>
            <Button type="submit">Search</Button>
            <Toaster />
        </Form>

        {movies && (
            <>
                {movies && (
                    <List>
                        {movies.map(movie => (
                            <Item key={movie.id}>
                                <Link to={`${movie.id}`} state={{ from: location}}>{movie.title}</Link>
                            </Item>
                        ))}
                    </List>
                
                )}
            </>
        )}
        </main>
    );
}


// Пришлось переделать со стейтом search, потому что не получалось не отправлять пустой запрос. 
// Но этот вариант мне больше нравится (на разбор)
// import { getSearchMovie } from 'services/movies-api';
// import { useEffect, useState } from 'react'
// import { useSearchParams, useLocation } from 'react-router-dom';
// import { Form, Input, Button, List, Link, Item } from './MoviesPage.styled';
// import toast, { Toaster } from 'react-hot-toast';

// export const MoviesPage = () => {
//     const [movies, setMovies] = useState([])
//     const [searchParams, setSearchParams] = useSearchParams('');
//     const query = searchParams.get('query');
//     const location = useLocation();

//     useEffect(() => {
//         if (query === null || query === "") {
//             return;
//         }

//         async function fetchSearchMovie() {
//             try {
//                 const response = await getSearchMovie(query);
//                 setMovies(response);
//             } catch(error) {
//                 console.log('Error');
//             }
//         }
//         fetchSearchMovie();

//     }, [query])

//     const handleSubmit = (e) => {
//         e.preventDefault();        
    
//         if (query === '') {
//             return toast.error("Search field can't be empty!");
//         }
//         setSearchParams({ query: e.currentTarget.elements.query.value.trim() });
//         e.currentTarget.reset();;
//     }
    
//     return (
//         <main>
//         <Form onSubmit={handleSubmit}>
//             <Input type="text" name="query"></Input>
//             <Button type="submit">Search</Button>
//             <Toaster />
//         </Form>

//         {movies && query && (
//             <>
//                 {movies && query && (
//                     <List>
//                         {movies.map(movie => (
//                             <Item key={movie.id}>
//                                 <Link to={`${movie.id}`} state={{ from: location}}>{movie.title}</Link>
//                             </Item>
//                         ))}
//                     </List>
                
//                 )}
//             </>
//         )}
//         </main>
//     );
// }