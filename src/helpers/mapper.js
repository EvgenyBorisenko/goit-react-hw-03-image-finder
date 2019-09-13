const mapper = arr => {
  return arr.map(el => {
    const { webformatURL: smallImage, largeImageURL: largeImage } = el;
    return { smallImage, largeImage, ...el };
  });
};

export default mapper;
