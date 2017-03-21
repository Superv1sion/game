import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app';
import { Provider } from 'react-redux';
import store from './store/configureStore';

store.subscribe(() => console.log('[UPDATE_STORE]', store.getState()));
//store.dispatch(setAppParams(queryStore));


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));