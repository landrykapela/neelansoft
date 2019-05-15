import React from 'react';
import Logo from './logo.js';
import Navigation from './Navigation.js';
import CustomButton from './custom-button.js';
import ContactForm from './ContactForm.js';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {buttonClicked:false};
    this.handleFormClick = this.handleFormClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleFormClick(){
    this.setState((ps)=>({buttonClicked:false}));
    if(document.body.classList.contains('no-scroll')) document.body.classList.remove('no-scroll');
  }
  handleButtonClick(){
    console.log("clicked button");
    this.setState((ps)=>({buttonClicked:!ps.buttonClicked}));
      console.log("clicked: "+this.state.buttonClicked);
      document.body.classList.add('no-scroll');
  }
  render(){
    const contactForm = (this.state.buttonClicked) ? <ContactForm onClick={this.handleFormClick}/> : null;
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

            <CustomButton text="Get in touch" onClick={this.handleButtonClick} />
          {contactForm}
        </div>

      </div>
      </header>
    )
  }
}

export default Header;
