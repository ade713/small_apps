import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

import App from './components/App';


const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('app')
);

