import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//redux must import this 3 library
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension' // ony use for check what reducer are containing, no other effect

//create store
import rootReducer from "./reducers/index";

const store = createStore(rootReducer,composeWithDevTools())

//import form this and every component in this app can use it

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);