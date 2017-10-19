import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//@TODO Some more logic here

/**
 * @type {Object}
 */
export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
