import React from 'react';
import Logo from './logo.js';
import Navigation from './Navigation.js';
function Header(){
  return(
    <header className="App-header primary">
    <div>
      <div className="content flex-row">
        <Logo title="Neelansoft Technologies" />
        <div className="nav">
          <Navigation links={[{id:"home",active:true,text:"Home",target:"/"},{id:"about",active:false,text:"About us",target:"/about"},{id:"services",active:false,text:"Services",target:"/services"},{id:"contact",active:false,text:"Contact us",target:"/contact"} ]} />
        </div>
      </div>
      <div className="head-text">
        <h3>Focus on your core business</h3>
        <h1>We take care of the rest</h1>

          <button className="header-button">Get in touch</button>

      </div>
    </div>
    </header>
  )
}

export default Header;
