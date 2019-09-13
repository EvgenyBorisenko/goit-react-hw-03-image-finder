import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styles from './Modal.module.css';
import './modalTransition.css';

class Modal extends Component {
  static defaultProps = {
    tags: 'large card image',
  };

  static propTypes = {
    url: PropTypes.string.isRequired,
    tags: PropTypes.string,
    handleModalHide: PropTypes.func.isRequired,
  };

  state = { isOpen: true };

  overlayRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleOpenModal = () => {
    this.setState({ isOpen: true });
    this.props.handleModalHide();
  };

  handleCloseModal = () => {
    this.setState({ isOpen: false });
    this.props.handleModalHide();
  };

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.handleCloseModal();
  };

  handleOverlayClick = e => {
    const { current } = this.overlayRef;

    if (current && e.target !== current) return;

    this.handleCloseModal();
  };

  render() {
    const { isOpen } = this.state;
    const { url, tags } = this.props;

    return (
      <CSSTransition in={isOpen} timeout={500} classNames="modal" unmountOnExit>
        {/*eslint-disable*/}
        <div
          ref={this.overlayRef}
          className={styles.overlay}
          onClick={this.handleOverlayClick}
        >
          <div className={styles.modal}>
            <img src={url} alt={tags} />
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default Modal;
