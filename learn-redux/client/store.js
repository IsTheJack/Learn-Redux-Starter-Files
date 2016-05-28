import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-store-redux';

import { browserHistory } from 'react-router';

// Import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments.js';
import posts from './data/posts.js';

const defaultState = {
    posts,
    comments,
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store