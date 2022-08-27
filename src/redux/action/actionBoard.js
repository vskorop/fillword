export const getWord = (payload) => ({
    type: 'GET_BOARD',
    payload
  });

  export const getWordThunk = (arr) => async (dispath) => {
    dispath(getWord(arr));
  };
