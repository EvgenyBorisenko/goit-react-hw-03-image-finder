import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styles from './ImageFinder.module.css';
import Modal from '../Modal/Modal';
import '../Modal/modalTransition.css';

class PhotoCard extends Component {
  static defaultProps = {
    tags: 'card image',
  };

  static propTypes = {
    smallImage: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
    tags: PropTypes.string,
    likes: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  };

  state = { modalOpen: false };

  handleModalShow = () => this.setState({ modalOpen: true });

  handleModalHide = () => this.setState({ modalOpen: false });

  render() {
    const { modalOpen } = this.state;
    const {
      smallImage,
      largeImage,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = this.props;
    return (
      <div>
        <div className={styles.photoCard}>
          <img src={smallImage} alt={tags} />

          <div className={styles.stats}>
            <p className={styles.statsItem}>
              <i className="material-icons">thumb_up</i>
              {likes}
            </p>
            <p className={styles.statsItem}>
              <i className="material-icons">visibility</i>
              {views}
            </p>
            <p className={styles.statsItem}>
              <i className="material-icons">comment</i>
              {comments}
            </p>
            <p className={styles.statsItem}>
              <i className="material-icons">cloud_download</i>
              {downloads}
            </p>
          </div>

          <button
            type="button"
            className={styles.fullscreenButton}
            onClick={this.handleModalShow}
          >
            <i className="material-icons">zoom_out_map</i>
          </button>
        </div>
        <CSSTransition
          in={modalOpen}
          timeout={500}
          classNames="modal"
          unmountOnExit
        >
          <Modal
            url={largeImage}
            tags={tags}
            handleModalHide={this.handleModalHide}
          />
        </CSSTransition>
      </div>
    );
  }
}

export default PhotoCard;
