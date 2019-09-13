import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';

​const Gallery = ({ imagesArr }) => {
  return (
    <ul className="gallery">
      {imagesArr.map(
        ({
          id,
          webformatURL,
          largeImageURL,
          likes,
          views,
          comments,
          downloads,
        }) => (
          <PhotoCard
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            likes={likes}
            views={views}
            comments={comments}
            downloads={downloads}
          />
        ),
      )}
    </ul>
  );
};
​
Gallery.propTypes = {
  imagesArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
​
export default Gallery;
