import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

import App from './components/App';
// import Voting from './components/Voting';
// import Results from './components/Results';


const pair = ['Trainspotting', '28 Days Later'];

// const routes = (
//   <div>
//     <Route component={ App }> */}
//       <Route path="/results" component={ Results } />
//       <Route exact path="/" component={ Voting } />
//     </Route>
//   </div>
// );

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('app')
);

