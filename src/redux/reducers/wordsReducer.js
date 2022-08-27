const wordsReducer = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
      case 'GET_BOARD':
        return payload;
      default:
        return state;
    }
  };
  
  export default wordsReducer;