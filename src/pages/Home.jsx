import { Container } from 'components/App.styled';
import Loader from 'components/Loader/Loader';
import MovieList from '../components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/moviesApi';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchTrending()
      .then(setMovies)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <Container>
      <MovieList movies={movies} search={false} />
      {isLoading && <Loader />}
    </Container>
  );
};

export default Home;
