import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';

const Searchbar = ({ handleSubmit }) => {
  const [userRequest, setUserRequest] = useState('');

  const handleChange = event => {
    setUserRequest(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (!userRequest) {
      Notify.failure('Search field is empty!!!');
      return;
    }
    handleSubmit(userRequest);
    setUserRequest('');
  };

  return (
    <form className={css.SearchForm} onSubmit={onSubmit}>
      <input
        className={css.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Пошук фільму"
        onChange={handleChange}
      />
      <button type="submit" className={css.SearchFormButton}>
        <span className={css.SearchFormButtonLabel}>Search</span>
      </button>
    </form>
  );
};

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
