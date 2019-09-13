import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const LoadMoreButton = ({ handleLoadMore }) => (
  <div className={styles.wrapButton}>
    <button
      className={styles.loadMoreButton}
      onClick={handleLoadMore}
      type="button"
    >
      Load More
      <span role="img" aria-label="fire" />
    </button>
  </div>
);

LoadMoreButton.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

export default LoadMoreButton;
