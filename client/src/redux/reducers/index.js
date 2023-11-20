import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import blogReducer from './blogReducer';

const rootReducer = combineReducers({
  api: apiReducer,
  blog: blogReducer,
});

export default rootReducer;