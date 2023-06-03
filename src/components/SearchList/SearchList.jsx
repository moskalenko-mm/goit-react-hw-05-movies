import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './SearchList.module.css';

const SearchList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.searchList}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            <p>{movie.title || movie.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

SearchList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default SearchList;
