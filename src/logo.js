import React from 'react';

import logo from './logo.png';

function Logo(props){
  return(
    <div id="logo-container">
      <img className="logo" src={logo} alt="Neelansoft Technologies logo" />
      <span>{props.title}</span>
    </div>
  )
}
export default Logo;
