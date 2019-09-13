import axios from 'axios';

/* eslint-disable-next-line */
export const getCardsFromApi = (query, page = 1) =>
  axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=12869213-d0e5717d841c234d773fc655d`,
    )
    .then(({ data }) => data.hits);
