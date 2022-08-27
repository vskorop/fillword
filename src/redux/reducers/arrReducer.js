const wordsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_ARR':
      return [...state, payload];
    default:
      return state;
  }
};

export default wordsReducer;
