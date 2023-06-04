import PropTypes from 'prop-types';
import css from './MovieInfo.module.css';

const MovieInfo = ({ movie }) => {
  const {
    poster_path,
    title,
    name,
    overview,
    genres,
    vote_average,
    release_date,
  } = movie;
  let releaseYear = '????';

  if (release_date) {
    releaseYear = new Date(release_date);
  }

  return (
    <section>
      <div className={css.movieWrapper}>
        <div className={css.imgWrapper}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://dummyimage.com/250x375'
            }
            alt=""
          />
        </div>
        <div className={css.infoWrapper}>
          <h2>
            {title ? title : name} (
            {releaseYear === '????' ? releaseYear : releaseYear.getFullYear()})
          </h2>
          <p>User Score: {Math.ceil(vote_average * 10)}%</p>
          <h3>Опис</h3>
          <p>{overview}</p>
          <h3>Жанри</h3>
          <ul className={css.genresList}>
            {genres.map(genre => (
              <li key={genre.id}>
                <p>{genre.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieInfo;
