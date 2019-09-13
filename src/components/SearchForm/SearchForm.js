import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../ImageFilter/ImageFinder.module.css';

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { category: '' };

  handleInputChange = e => this.setState({ category: e.target.value });

  handleFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.category);

    this.setState({ category: '' });
  };

  render() {
    const { category } = this.state;
    return (
      <form className={styles.searchForm} onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          value={category}
          autoComplete="off"
          placeholder="Search images..."
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default SearchForm;
