import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './Header/Header';
import Home from '../pages/Home';
import Movie from '../pages/Movie';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import MovieSearch from '../pages/MovieSearch';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MovieSearch />} />
        <Route path="movies/:movieId" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
