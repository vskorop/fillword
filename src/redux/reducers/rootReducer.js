import { combineReducers } from 'redux';
import wordsReducer from './wordsReducer'

const rootReducer = combineReducers({
 word: wordsReducer
});

export default rootReducer;