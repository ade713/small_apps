import React from 'react';

export default React.createClass({
  getPaiir: function(){
    return this.props.pair || [];
  },
  render: function(){
    return (
      <div className="voting">
        { this.getPaiir().map(entry => 
          <button key={ entry }>
            <h1>{ entry }</h1>
          </button>
        )}
      </div>
    );
  }
});