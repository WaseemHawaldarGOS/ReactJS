import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';


/**
    Provider and connect libraries are provided by react-redux.
    Provider just makes sure that all the redux store data is provided to all the components.
    connect connects to reducers/store data via provider.
**/
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
