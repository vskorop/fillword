export const addWord = (payload) => ({
  type: 'ADD_ARR',
  payload
});

export const addWordThunk = (arr) => async (dispath) => {
  dispath(addWord(arr));
};
