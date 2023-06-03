import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Trending.module.css';

const Trending = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.trendingList}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`} state={{ from: location }}>
            <p>{movie.title || movie.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

Trending.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Trending;
