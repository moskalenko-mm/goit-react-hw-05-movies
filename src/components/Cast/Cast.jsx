import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import { useEffect, useState } from 'react';
import { fetchActors } from 'services/moviesApi';
import { Container } from 'components/App.styled';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchActors(movieId)
      .then(setCast)
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (!cast || cast.length === 0) {
    return <p>Sorry, we have no info about cast</p>;
  }
  return (
    <Container>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <div className={css.imgWrapperCast}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : 'https://dummyimage.com/250x375'
                }
                alt={actor.name}
              />
            </div>
            <div className={css.infoWrapper}>
              <h2>{actor.name}</h2>
              <p>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
      {isLoading && <Loader />}
    </Container>
  );
};

export default Cast;
