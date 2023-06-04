import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import { Container } from 'components/App.styled';
import GoBackLink from 'components/GoBackLink/GoBackLink';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchDetails } from 'services/moviesApi';

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    fetchDetails(movieId)
      .then(setMovie)
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (!movie) {
    return;
  }
  return (
    <Container>
      <GoBackLink path={location?.state?.from ?? '/'} />
      <MovieInfo movie={movie} />
      <AdditionalInfo id={movie.id} />
      {isLoading && <Loader />}
    </Container>
  );
};

export default Movie;
