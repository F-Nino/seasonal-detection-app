import React from 'react';

const Spinner = (props) =>{
  return(
    <div className="ui active dimmer">
      <div className="ui bix text loader">{props.message}</div>
    </div>

  );

};

//used if prop isn't passed in it defaults to This
//better than using or in {} for default
Spinner.defaultProps = {
  message: 'Loading..'
}
export default Spinner;
