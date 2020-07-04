import React from 'react';

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

//defaultProps will get called if we don't pass any message
//It is better than writing {props.message || Loading...}
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
