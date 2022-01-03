import "./App.css";
import React, { Component ,useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import { useHistory, Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import MediaQuery from 'react-responsive';
import axios from 'axios';
import GoogleMap from './components/Map2' // import the map here
import Fade from 'react-reveal/Fade';

import flyingkiss from './assets/flyingkiss_medium.png'
import dummy from './assets/dummy.png'

import john from './assets/john.png'
import melanie from './assets/melanie.png'
import patrick from './assets/patrick.png'
import catherine from './assets/catherine.png'
import kyle from './assets/kyle.png'
import amanda from './assets/amanda.png'
import kevin from './assets/kevin3.png'
import kaitlyn from './assets/kaitlyn.png'
import oliver from './assets/oliver.png'
import sarah from './assets/sarah.png'
import aiden from './assets/aiden.png'
import rory from './assets/rory.png'
import tintype from './assets/tintype.png'
import hyatt from './assets/hyatt1.png'
import doubletree from './assets/doubletree1.png'
import logo from './assets/DE_StampHead.svg'
import logo_sage from './assets/DE_StampHead-sage.svg'
import logo_slate from './assets/DE_StampHead-slate.svg'
import logo_yellow from './assets/DE_StampHead-yellow.svg'
import logo_rust from './assets/DE_StampHead-rust.svg'
import logo_white from './assets/DE_StampHead-white.svg'



class App extends Component {
  
  constructor(props) {
    super(props);
      this.state = {
        name: '',
        guest: "2",
        email: '',
        message: '',
        woof: ''
      };
  }  

  componentDidMount() {
    axios.get("https://dylanandemily2022.com:443/gggggg")
      .then(res => {
        this.setState({ woof: res.data });
      })
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
    console.log(this.state)
  }

  onGuestChange(event) {
    this.setState({guest: event.target.value})
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




  handleSubmit2() {
    console.log(this.state)
    var data = this.state
    console.log(data)



  }


  handleSubmit(){
    console.log(this.state)
    var data = this.state
    console.log(data)


    axios.post("https://dylanandemily2022.com:443/mailstaff", data, {})
    .then((response)=>{
      console.log(response.data)
      if (response.data === 'Email sent') {
        alert("Message Sent.");
        console.log("message sent")
        this.resetForm()
      } else {
        alert("Message failed to send.")
        console.log("message not sent")
      }
    })
  }

  resetForm(){
    this.setState({name: '', organization: '', email: '', message: ''})
  }



  render() {
    return (
      <div className="major-container bg-white">
        <ToastContainer /> 
        <div className="App bg-sage">
          <img src={flyingkiss} style={{"width":"100%"}} alt="Image of Dylan catching Emily flying in the air for a kiss infront of the Austin, TX cityscape" />
              
          <div className="main-div-smaller" style={{"padding-top":"75px"}}>
            <h1 className="h1 center">Emily Lofaro & Dylan Fox</h1>
            <div className="flex-wrap" >
              <div style={{"width":"50vh", "min-width":"30vh"}} >

                <Fade bottom cascade>
                
                <br/>
                <br/>
                <p className="p">

                
                Together with their families, Dylan and Emily joyfully invite you to their wedding.
                
                <br/>
                <br/>
                
                The wedding is on Saturday, the second of April, two thousand twenty-two at four o'clock in the afternoon.
                
                <br/>
                <br/>
                </p>
                </Fade>
              </div>
              <div>
                <img src={tintype} style={{"width":"100%"}} alt="Tintype photograph of Dylan and Emily" />
              </div>

             
            </div>
          </div>
        </div>
        <div className="App bg-white">
          <div className="main-div-smallest" >
            <Fade bottom cascade>
              <p className="p center-text">
                The event is held at VUKA at Bouldin Creek in Austin, TX.
                <br/>
                <br/>
              </p>
                <GoogleMap woof={this.state.woof}/>
                <br/>
                <br/>
            </Fade>
          </div>
        </div>
        <div className="App bg-rust"style={{"width":"100%", "height":"25px", "margin-bottom":"100px"}} >
        </div>    
        <div className="main-div-smaller" >
          <div className="center-text">
            <div className="container mrgnbtm">
              <div className="row">
                <div>
                  <Fade bottom cascade>
                  <h1 className="h1">RSVP Below!</h1>
                  </Fade>
                  <Fade bottom cascade>

                    <form id="contact-form" className="App black-box greyshadow-bottom pseudo-center" >
                      
                        <p className="p">
                            <label htmlFor="name">Name</label>
                            <div className="App short-spacer" />
                            <input type="text" name="name" placeholder="Name" id="name" className="form-control center-text" value={this.state.name} onChange={evt => this.onNameChange(evt)}/>
                        </p>
                        <p className="p">
                            <label htmlFor="organization">Number of Guests</label>
                            <div className="App short-spacer" />
                            <input type="number" id="guest" placeholder="2" className="form-control center-text" value={this.state.guest} onChange={evt => this.onGuestChange(evt)}/>
                        </p>
                        <p className="p">
                            <label htmlFor="email">Email address</label>
                            <div className="App short-spacer" />
                            <input type="email" id="email" className="form-control center-text" aria-describedby="emailHelp" value={this.state.email} onChange={evt => this.onEmailChange(evt)}/>
                        </p>
                        <p className="p">
                            <label htmlFor="message">Specify guests' dinner preferences below.<br/>Chicken or Vegetarian?</label>
                            <div className="App short-spacer" />
                            <textarea className="form-control" id="message" rows="15" value={this.state.message} style={{"height":"25vh","max-width":"550px", }} onChange={evt => this.onMessageChange(evt)}></textarea>
                        </p>
                        { (this.state.email !== '' && this.state.message !== '') ?
                          (<button type="button" className="App button-active"  onClick={() => this.handleSubmit()} >Submit</button>) :
                          (<button type="button" className="App button-off">Submit</button>) }
                    </form>
                  </Fade>
                </div>
                <div className="App short-spacer" />
              </div>
            </div>
          </div>
        </div>
        <div className="App bg-yellow">

            <Fade bottom cascade>
          <div className="main-div-smaller" >

            <h1 className="h1-alt slate-text">There are two hotel room blocks available</h1>
            
            <br/>
            <br/>
              <div className="flex-wrap" >
              <div style={{"max-width":"700px","width":"100%"}} >
                <h2 className="h2 slate-text">Hyatt Regency</h2>
                <br/>
                <p className="p-alt slate-text">

                
                The Hyatt Regency is located off of Barton Springs. 
                Nearby, you can walk along Auditorium Shores, which overlooks a part of the Colorado River commonly known as Town Lake.
                It's also a small step away from South Congress, South 1st, South Lamar, and downtown Austin areas. 
                
                <br/>
                <br/>
                </p>
                <p className="p-alt slate-text">
                To book a blocked room with the Hyatt Regency, <a href="https://www.hyatt.com/en-US/group-booking/AUSRA/G-DDFW" target="_blank" rel="noopener noreferrer">click here</a>. Block is available until March 3, 2022.
                <br/>
                <br/>
                </p>  
              </div>
              <div>
                <img src={hyatt} style={{"max-width":"700px","width":"100%"}}  alt="Image of the Hyatt Regency overlooking Town Lake" />
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>

        <div className="App bg-rust"style={{"width":"100%", "height":"25px", "margin-bottom":"100px"}} >
        </div>    
              <div className="flex-wrap" >
              <div >
                <img src={doubletree} style={{"max-width":"700px","width":"100%"}} alt="Image of the downtown Austin Doubletree" />
              </div>
              <div style={{"max-width":"700px","width":"100%"}} >
                <h2 className="h2 slate-text">Doubletree Suites by Hilton Hotel Austin</h2>
                <br/>
                <p className="p-alt slate-text">

                Doubletree Suites by Hilton Hotel Austin is located in downtown Austin. 
                It's within walkable distance to the Texas Capitol and Congress Ave. 
                It's also very close to the Drag and the University of Texas.
                <br/>
                <br/>
                </p>
                <p className="p-alt slate-text">
                To book with Doubletree Suites by Hilton Hotel Austin, call 512-478-7000 and ask for the Lofaro/Fox Wedding group rate. Block is available until March 12, 2022.
                <br/>
                <br/>
                </p>  
              </div>
            </div>
            
            
            <br/>
            <br/>

          </div>

            </Fade>
        </div>
        <div className="App bg-white">
          <div className="main-div-smaller" >
            <h1 className="h1 center-text">Meet the wedding party!</h1>
            <div className="flex-wrap" >
              <div style={{"width":"100%", "max-width":"400px"}} >
                <img src={john} style={{"width":"100%", "max-width":"400px"}} alt="John Fox - Best Man" />
                <h2 className="h2 center-text remove-margin">John Fox</h2>
                <p className="p center-text remove-margin">Best Man</p>
                <p className="p2-alt center-text remove-margin">
                  John Fox is best known as a former swimming phenom turned spice wizard. 
                  He's the best man with the best recipes.
                </p>
                <br/>
                <br/>
              </div>
              <div style={{"width":"100%", "max-width":"400px"}} >
                <img src={melanie} style={{"width":"100%", "max-width":"400px"}} alt="Melanie Lofaro Osti - Maid of Honor" />
                <h2 className="h2 center-text remove-margin">Melanie Lofaro Osti</h2>
                <p className="p center-text remove-margin">Maid of Honor</p>
                <p className="p2-alt center-text remove-margin">
                  Cousin of the Bride.
                </p>
                <br/>
                <br/>
              </div>
              <div style={{"width":"100%", "max-width":"400px"}} >
                <img src={patrick} style={{"width":"100%", "max-width":"400px"}} alt="Patrick Fox - Groomsman" />
                <h2 className="h2 center-text remove-margin">Patrick Fox</h2>
                <p className="p center-text remove-margin">Groomsman</p>
                <p className="p2-alt center-text remove-margin">
                  Family man, world traveler, and brother of the Groom.
                  Patrick has been a role-model to both Dylan and Emily.
                </p>
                <br/>
                <br/>
              </div>
              <div style={{"width":"100%", "max-width":"400px"}} >
                <img src={catherine} style={{"width":"100%", "max-width":"400px"}} alt="Catherine Lofaro Rangel - Bridesmaid" />
                <h2 className="h2 center-text remove-margin">Catherine Lofaro Rangel</h2>
                <p className="p center-text remove-margin">Bridesmaid</p>
                <p className="p2-alt center-text remove-margin">
                  Cousin of the Bride.
                </p>
                <br/>
                <br/>
              </div>
              <div style={{"width":"100%", "max-width":"400px"}} >
                <img src={kyle} style={{"width":"100%", "max-width":"400px"}} alt="Kyle Siegler - Groomsman" />
                <h2 className="h2 center-text remove-margin">Kyle Siegler</h2>
                <p className="p center-text remove-margin">Groomsman</p>
                <p className="p2-alt center-text remove-margin">
                  Kyle is like a brother to Dylan. Having grown up off Wilson St. in Winona, 
                  they were best friends from the neighborhood. 
                </p>
                <br/>
                <br/>
              </div>
              <div style={{"width":"100%", "max-width":"400px"}} >
                <img src={amanda} style={{"width":"100%", "max-width":"400px"}} alt="Amanda Lofaro - Bridesmaid" />
                <h2 className="h2 center-text remove-margin">Amanda Lofaro</h2>
                <p className="p center-text remove-margin">Bridesmaid</p>
                <p className="p2-alt center-text remove-margin">
                  Cousin of the Bride.
                </p>
                <br/>
                <br/>
              </div>
              <div style={{"width":"100%", "max-width":"400px"}} >
                <img src={kevin} style={{"width":"100%", "max-width":"400px"}} alt="Kevin Allen - Groomsman" />
                <h2 className="h2 center-text remove-margin">Kevin Allen</h2>
                <p className="p center-text remove-margin">Groomsman</p>
                <p className="p2-alt center-text remove-margin">
                  Kevin provided Emily and Dylan with a room to stay at his beautiful homestead. 
                  His orange cat, brown dog, and flock of chickens were good friends to Dylan and Emily. 
                  He also plays the meanest mouth-harp in all of Austin, TX.
                </p>
                <br/>
                <br/>
              </div>
              <div style={{"width":"100%", "max-width":"400px"}} >
                <img src={kaitlyn} style={{"width":"100%", "max-width":"400px"}} alt="Kaitlyn - Bridesmaid" />
                <h2 className="h2 center-text remove-margin">Kaitlyn Coffey</h2>
                <p className="p center-text remove-margin">Bridesmaid</p>
                <p className="p2-alt center-text remove-margin">
                  Friend of the Bride.
                </p>
                <br/>
                <br/>
              </div>
              <div style={{"width":"100%", "max-width":"400px"}} >
                <img src={oliver} style={{"width":"100%", "max-width":"400px"}} alt="Oliver Nath - Groomsman" />
                <h2 className="h2 center-text remove-margin">Oliver Nath</h2>
                <p className="p center-text remove-margin">Groomsman</p>
                <p className="p2-alt center-text remove-margin">
                  Former college roommate to the Groom. 
                  A cultural man, fancying dogs, bikes, computers, and the Pacific Northwest. 
                </p>
                <br/>
                <br/>
              </div>
              <div style={{"width":"100%", "max-width":"400px"}} >
                <img src={sarah} style={{"width":"100%", "max-width":"400px"}} alt="Sarah Furman - Bridesmaid" />
                <h2 className="h2 center-text remove-margin">Sarah Furman</h2>
                <p className="p center-text remove-margin">Bridesmaid</p>
                <p className="p2-alt center-text remove-margin">
                  Second cousin of the Bride.
                </p>
                <br/>
                <br/>
              </div>
              <div style={{"width":"100%", "max-width":"400px"}} >
                <img src={aiden} style={{"width":"100%", "max-width":"400px"}} alt="Aiden Fox - Groomsman" />
                <h2 className="h2 center-text remove-margin">Aiden Fox</h2>
                <p className="p center-text remove-margin">Groomsman</p>
                <p className="p2-alt center-text remove-margin">
                  Nephew and former housemate to the Bride and Groom.
                </p>
                <br/>
                <br/>
              </div>
              <div style={{"width":"100%", "max-width":"400px"}} >
                <img src={rory} style={{"width":"100%", "max-width":"400px"}} alt="Aurora Fox - Junior Bridesmaid" />
                <h2 className="h2 center-text remove-margin">Aurora Fox</h2>
                <p className="p center-text remove-margin">Junior Bridesmaid</p>
                <p className="p2-alt center-text remove-margin">
                  Niece and former (and current) playmate to the Bride and Groom. 
                </p>
                <br/>
                <br/>
              </div>
            </div>
          </div>
        </div>
        <div className="App bg-rust">
          <div className="main-logo center" style={{"width":"250px", "height":"250px"}} >
            <img src={logo_sage} alt="Rust D E logo with sun and cactus" />
          </div>
        </div>    
      </div>
    );
  }
}

export default App;
