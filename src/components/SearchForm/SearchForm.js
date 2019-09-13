import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';
const SearchForm = ({ onSubmitForm, onChangeInput, inputValue }) => {
  return (
    <form className={styles.search_form} onSubmit={onSubmitForm}>
      <input
        onChangeInput={onChangeInput}
        inputValue={inputValue}
        type="text"
        autoComplete="off"
        placeholder="Search images..."
      />
    </form>
  );
};
​
SearchForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};
​
export default SearchForm;
