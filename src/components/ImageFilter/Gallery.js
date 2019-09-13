import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageFinder.module.css';
import PhotoCard from './PhotoCard';

const Gallery = ({ cards }) => (
  <ul className={styles.gallery}>
    {cards.map(card => (
      <li className={styles.galleryItem} key={card.id} id={card.id}>
        <PhotoCard {...card} />
      </li>
    ))}
  </ul>
);

Gallery.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Gallery;
