import React from 'react';
import { List } from 'immutable';
import { Route } from 'react-router';

import Results from './Results';
import Voting from './Voting';

const pair = List.of('Trainspotting', '28 Days Later');
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
        <Route exact path="/results" component={ Results } />
        <Route path="/" component={ VotingComponent } />
      </div>
    );
  }
}