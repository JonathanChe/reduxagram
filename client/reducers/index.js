import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from '../data/posts';
import comments from '../data/comments';

const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer
});

export default rootReducer;
