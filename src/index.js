import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import * as serviceWorker from './serviceWorker';
import './index.less';
import reducers from './lib/redux/reducers';
import Admin from './lib/Admin';
import LoginSaga from './lib/sagas/Login';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

ReactDOM.render(<Admin store={store}></Admin>, document.getElementById('root'));

sagaMiddleware.run(LoginSaga)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
