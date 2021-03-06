import React from 'react';
import { List,
         Map } from 'immutable';
import { Route } from 'react-router';

import { ResultsContainer, Results } from './Results';
import { VotingContainer, Voting } from './Voting';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({
  'Trainspotting': 5,
  '28 Days Later': 4
});

const ResultsComponent = (props) => {
  return(
    <Results pair={ pair } tally={ tally } { ...props } />
  );
};

const VotingComponent = (props) => {
  return(
    <Voting pair={ pair } { ...props } />
  );
};

export default class App extends React.Component {
  constructor(props){
    super(props);
    console.log('APP', this.props);
  }

  render() {
    return (
      <div>
        <Route exact path="/results" component={ ResultsContainer } />
        {/* <Route exact path="/results" component={ ResultsComponent } /> */}
        <Route path="/" component={ VotingContainer } />
        {/* <Route path="/" component={ VotingComponent } /> */}
      </div>
    );
  }
}