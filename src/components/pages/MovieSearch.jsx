import { Container } from 'components/App.styled';
import Loader from 'components/Loader/Loader';
import SearchList from 'components/SearchList/SearchList';
import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'services/moviesApi';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [userRequest, setUserRequest] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userRequest === '') return;
    setIsLoading(true);
    fetchMovies(userRequest)
      .then(setMovies)
      .catch(error => {
        alert(error);
      })
      .finally(() => setIsLoading(false));
  }, [userRequest]);

  const handleSubmit = userRequest => {
    setUserRequest(userRequest);
    setMovies([]);
  };

  return (
    <Container>
      <Searchbar handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      <SearchList movies={movies} />
    </Container>
  );
};

export default MovieSearch;
