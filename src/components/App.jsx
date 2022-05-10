import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Cast, Reviews } from 'pages';
import { Layout } from 'components/Layout/Layout';

const createChunk = componentName => {
    return lazy(() =>
        import(`../pages/${componentName}/${componentName}`).then(module => ({ default: module[componentName]}))
    );
}
const HomePage = createChunk('HomePage');
const MovieDetailsPage = createChunk('MovieDetailsPage');
const MoviesPage = createChunk('MoviesPage');

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="movies" element={<MoviesPage />} />
                <Route path="movies/:movieId" element={<MovieDetailsPage />}>
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    )
}