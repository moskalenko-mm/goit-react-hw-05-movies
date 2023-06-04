import { Container } from 'components/App.styled';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/moviesApi';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams('');

  useEffect(() => {
    const query = searchParams.get('query');
    if (query === '') return;
    setIsLoading(true);
    fetchMovies(query)
      .then(setMovies)
      .catch(error => {
        alert(error);
      })
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
    setMovies([]);
  };

  return (
    <Container>
      <Searchbar handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      <MovieList movies={movies} search={true} />
    </Container>
  );
};

export default MovieSearch;
