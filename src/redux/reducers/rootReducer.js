import { combineReducers } from 'redux';
import wordsReducer from './wordsReducer';
import arrReducer from './arrReducer';

const rootReducer = combineReducers({
  word: wordsReducer,
  arr: arrReducer
});

export default rootReducer;
