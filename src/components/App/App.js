import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../ImageFilter/Gallery';
import { getCardsFromApi } from '../../services/imageFinder-api';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import mapper from '../../helpers/mapper';

class App extends Component {
  state = {
    cards: [],
    category: 'cat',
    page: 2,
    error: null,
  };

  componentDidMount() {
    const { category } = this.state;
    getCardsFromApi(category)
      .then(cards => this.setState({ cards: mapper(cards) }))
      .catch(error => this.setState({ error }));
  }

  componentDidUpdate() {
    const { cards } = this.state;
    if (cards.length > 12) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleSubmit = category => {
    getCardsFromApi(category)
      .then(cards =>
        this.setState({
          cards: mapper(cards),
          page: 2,
          category,
        }),
      )
      .catch(error => this.setState({ error }));
  };

  handleLoadMore = () => {
    const { category, page } = this.state;

    getCardsFromApi(category, page).then(cards =>
      this.setState(state => ({
        cards: [...state.cards, ...mapper(cards)],
        page: state.page + 1,
      })),
    );
  };

  render() {
    const { cards, error } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.handleSubmit} />
        {cards.length > 0 && (
          <>
            <Gallery cards={cards} />
            <LoadMoreButton handleLoadMore={this.handleLoadMore} />
          </>
        )}
        {error && <h2>Not this time...</h2>}
      </div>
    );
  }
}

export default App;
