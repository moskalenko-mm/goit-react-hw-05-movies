import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './AdditionalInfo.module.css';

const AdditionalInfo = ({ id }) => {
  return (
    <div className={css.additionalWrapper}>
      <h3>Additional information</h3>
      <ul className={css.additionalList}>
        <li className={css.additionalItem}>
          <Link to={`cast`}>Cast</Link>
        </li>
        <li className={css.additionalItem}>
          <Link to={`reviews`}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

AdditionalInfo.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AdditionalInfo;
