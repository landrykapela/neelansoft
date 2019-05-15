import React from 'react';

class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.links = [];
    this.state = {links:this.links};
  }

  componentDidMount(){
    this.links = this.props.links;
    this.setState((ps)=>({links:this.links}));
  }
  handleClick(e){
    e.preventDefault();
    let id = e.target.id;
    for(let i=0; i < this.state.links.length; i++){
      if(this.state.links[i].id === id){
        this.links[i].active = true;
      }
      else{
        this.links[i].active = false;
      }
    }
    this.setState((ps)=>({links:this.links}))

  }

  render(){
    const mylinks = this.state.links.map((link)=>{
      return (<li><a href={link.target} className={link.active ? "active" : ""} id={link.id} onClick={this.handleClick}>{link.text}</a></li>)
    });

    return(
      <ul>
        {mylinks}
      </ul>
    )
  }
} export default Navigation
