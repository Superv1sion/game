import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from '../reducers';
import promisesMiddleware from '../middlewares/promisesMiddleware';
import initialState from './initialState';

const reducer = combineReducers(reducers);
// const createStoreWithMiddleware = applyMiddleware(promisesMiddleware, vkMiddlevare, sockerMiddlevare)(createStore);
// const store = createStoreWithMiddleware(reducer, initialState);
const store = createStore(reducer, initialState);

if (module.hot) {
    module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers/index');
        store.replaceReducer(nextRootReducer);
    });
}

export default store;