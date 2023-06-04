import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';

const MovieList = ({ movies, search }) => {
  const location = useLocation();
  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={search ? `${movie.id}` : `movies/${movie.id}`}
            state={{ from: location }}
          >
            <p>{movie.title || movie.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  search: PropTypes.bool.isRequired,
};

export default MovieList;
