import React from 'react';


function ContactForm(props){
  const handleChange = (e) =>{
    let target = e.target;
    let parts = target.value.split("@");
    if(parts.length != 2){
      target.classList.add("error");
    }
    else{
      let domain = parts[1].split(".");
      if(domain.length !=2){
        target.classList.add("error");
      }
      else{
        if(domain[1].length < 2){
          target.classList.add("error");
        }
        else{
          if(target.classList.contains("error")) target.classList.remove("error");
          
        }
      }
    }
  }

  //handle form submission
  const handleSubmit = ()=>{
    console.log("Submitting form ...");
    props.onClick();
  }
  return(
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="control">
        <span onClick={props.onClick}>X</span>
      </div>
      <h3>Contact our Team</h3>
      <input  className="form-input" type="email" id="email" placeholder="Enter Email" name="email" onChange={handleChange} />
      <input  className="form-input" type="text" id="name" placeholder="Enter your name" />
      <textarea className="form-input" name="detail" id="details"></textarea>
      <input id="submit" type="submit" className="form-input primary" value="Send"/>
    </form>
  )
}
export default ContactForm;
