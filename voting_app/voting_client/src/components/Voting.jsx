import React from 'react';

// export default React.createClass({
//   getPair: function(){
//     return this.props.pair || [];
//   },
//   isDisabled: function() {
//     return !!this.props.hasVoted;
//   },
//   render: function(){
//     return (
//       <div className="voting">
//         { this.getPaiir().map(entry => 
//           <button key={ entry }
//                   onClick={ () => this.props.vote(entry) }>
//             <h1>{ entry }</h1>
//           </button>
//         )}
//       </div>
//     );
//   }
// });


export default class Voting extends React.Component {
  constructor(props){
    super(props);
  }

  getPair() {
    return this.props.pair || [];
  }

  isDisabled() {
    return !!this.props.hasVoted;
  }

  render() {
    return(
      <div className="voting">
        { this.getPair().map(entry => 
          <button key={ entry }
                  onClick={ () => this.props.vote(entry) }>
            <h1>{ entry }</h1>
          </button>
        )}
      </div>
    );
  }
}