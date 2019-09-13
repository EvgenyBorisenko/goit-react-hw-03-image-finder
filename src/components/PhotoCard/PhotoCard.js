import PropTypes from 'prop-types';
import styles from './PhotoCard.module.css';
​
const PhotoCard = ({
  id,
  webformatURL,
  // largeImageURL,
  likes,
  views,
  comments,
  downloads,
}) => {
  return (
    <li className={styles.photo_card}>
      <img src={webformatURL} alt="" id={id} />
​
      <div className={styles.stats}>
        <p className={styles.stats_item}>
          <i className="material-icons">thumb_up</i>
          {likes}
        </p>
        <p className={styles.stats_item}>
          <i className="material-icons">visibility</i>
          {views}
        </p>
        <p className={styles.stats_item}>
          <i className="material-icons">comment</i>
          {comments}
        </p>
        <p className={styles.stats_item}>
          <i className="material-icons">cloud_download</i>
          {downloads}
        </p>
      </div>
​
      {/* <!-- Кнопка для открытия модалки с большим изображением, появляется при наведении --> */}
​
      <button type="button" className={styles.fullscreen_button}>
        <i className="material-icons">zoom_out_map</i>
      </button>
    </li>
  );
};
​
PhotoCard.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  // largeImageURL: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
};
​
export default PhotoCard;
