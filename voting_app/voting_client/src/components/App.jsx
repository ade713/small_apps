import React from 'react';
import { List,
         Map } from 'immutable';
import { Route } from 'react-router';

import Results from './Results';
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
  }

  render() {
    // return (
    //   React.cloneElement(
    //     this.props.children, 
    //     { pair: pair }
    //   )
    // );
    return (
      <div>
        <Route exact path="/results" component={ ResultsComponent } />
        <Route path="/" component={ VotingContainer } />
      </div>
    );
  }
}