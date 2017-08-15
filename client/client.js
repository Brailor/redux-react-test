import React from "react";
import {render} from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/reducer';
import thunkMiddleware from 'redux-thunk'

import AppContainer from './containers/AppContainer';
import {fetchTableList} from './actions/actions';

let store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware),);

/* storedispatch(fetchTableList())
    .then(() => console.log(store.getState())) */

//render
render(
    <Provider store={store}>    
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);