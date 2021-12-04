import "./../App.css";
import React, { Component } from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

import palette from './../assets/color_palette.svg'

class Contact extends Component { 

  constructor(props) {
    super(props);
      this.state = {
      	name: '',
      	organization: '',
      	email: '',
      	message: ''
      };
  }  

  onNameChange(event) {
    this.setState({name: event.target.value})
    console.log(this.state)
  }

  onOrganizationChange(event) {
    this.setState({organization: event.target.value})
    console.log(this.state)
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
    console.log(this.state)
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
    console.log(this.state)
  }

  handleSubmit(){
    console.log(this.state)
    var data = this.state
    console.log(data)
    axios.post("https://adasfoundation.org:443/mailstaff", data, {})
    .then((response)=>{
    	console.log(response.data)
      if (response.data === 'Email sent') {
        alert("Message Sent.");
    		this.resetForm()
      } else {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '', organization: '', email: '', message: ''})
  }



  render() {
    return (
		  <div className="App center-text">
		    <div className="container mrgnbtm">
		      <div className="row">
		        <div>
		          <h3 className="App h2">Contact us</h3>
		          <Fade bottom cascade>

								<form id="contact-form" onSubmit={() => this.handleSubmit()} className="App black-box greyshadow-bottom center">
								  
								    <p className="App p-mono">
								        <label htmlFor="name">Name</label>
		        						<div className="App short-spacer" />
								        <input type="text" name="name" placeholder="Name" id="name" className="form-control center-text" value={this.state.name} onChange={evt => this.onNameChange(evt)}/>
								    </p>
								    <p className="App p-mono">
								        <label htmlFor="organization">Organization</label>
		        						<div className="App short-spacer" />
								        <input type="text" id="organization" className="form-control center-text" value={this.state.organization} onChange={evt => this.onOrganizationChange(evt)}/>
								    </p>
								    <p className="App p-mono">
								        <label htmlFor="email">Email address</label>
		        						<div className="App short-spacer" />
								        <input type="email" id="email" className="form-control center-text" aria-describedby="emailHelp" value={this.state.email} onChange={evt => this.onEmailChange(evt)}/>
								    </p>
								    <p className="App p-mono">
								        <label htmlFor="message">Message</label>
		        						<div className="App short-spacer" />
								        <textarea className="form-control" id="message" rows="15" value={this.state.message} onChange={evt => this.onMessageChange(evt)}></textarea>
								    </p>
								    { (this.state.email !== '' && this.state.message !== '') ?
								      (<button type="submit" className="App button-active">Submit</button>) :
								      (<button type="submit" className="App button-off">Submit</button>) }
								</form>
				      </Fade>
		        </div>
		        <div className="App short-spacer" />
		      </div>
		    </div>
		  </div>
		);
  }
}

export default Contact;
 
