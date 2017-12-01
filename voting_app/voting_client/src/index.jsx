import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import io from 'socket.io-client';

import App from './components/App';
import reducer from './reducer';


const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: { Sunshine: 2 }
    }
  }
});

const socket = io(`${ location.protocol }//${ location.hostname }:8090`);

ReactDOM.render(
  <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('app')
);

