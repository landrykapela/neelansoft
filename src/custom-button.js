import React from 'react';


class CustomButton extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
        <button className="header-button" onClick={this.props.onClick}>{this.props.text}</button>
    )
  }

}
export default CustomButton;
