import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import categories from './categories';
import posts from './posts';
import comments from './comments';
import settings from './settings';

export default combineReducers({
  posts,
  categories,
  comments,
  settings,
  loadingBar: loadingBarReducer,
})