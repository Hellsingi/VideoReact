import { createStore, compose } from 'redux';

import reducer from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */



const stringEnchancer = (createStore) => (...args) => {
    const store = createStore(...args);

    const originalDispatch = store.dispatch;

    store.dispatch = (action) => {
        if (typeof action === 'string') {
            return originalDispatch({
                type: action
            })
        }

        originalDispatch(action);
    }

    return store;
};


const logEnchancer = (createStore) => (...args) => {
    const store = createStore(...args);

    const originalDispatch = store.dispatch;

    store.dispatch = (action) => {
        console.log(action.type);
        originalDispatch(action);
    }

    return store;
};




const store = createStore(reducer, compose(stringEnchancer, logEnchancer));

store.dispatch('Hello worls');

export default store;