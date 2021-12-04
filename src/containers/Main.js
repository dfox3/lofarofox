import "./../App.css";
import React, { Component } from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import palette from './../assets/color_palette.svg'
import memphis from './../assets/memphis-line_microscope.svg'

class Main extends Component { 

  constructor(props) {
    super(props);
      this.state = {
      	dagaze:true
      };
  }  

  gaze(){
    console.log(this.state)
    var data = this.state
    console.log(data)
    axios.post("https://adasfoundation.org:443/gaze", data, {})
    .then((response)=>{
    	console.log(response.data)
      if (response.data === 'Thuroughly gazed') {
        alert("Thoroughly gazed at the infinitesimal");
    		this.resetForm()
      } else {
        alert("Check your eyes, something seems off")
      }
    })
  }


  render() {
    return (
		  <div className=".App .main-div">
		    <div className="container mrgnbtm">
		      <div className="row">
		        <div className="col-md-8">
		          <Fade bottom cascade>
		          	<div style={{"display": "flex", "justify-content": "space-between"}}>
		          		<img src={memphis} style={{"height":"100%", "width":"50%", "vertical-align":"bottom", "max-height":"800px", "display":"inline-block"}}/>
              		<div style={{"width":"50%"}}>
				          	<h2 className="App h2">STEP UP</h2>
					          <h2 className="App h4"> to the microscope, </h2>
					          <h2 className="App h4"> and view the infinitesimal;  </h2>
					          <p className="App p-mono"> the A<span className="T">T</span><span className="C">CCC</span><span className="G">G</span><span className="C">C</span><span className="G">G</span><span className="T">T</span>A<span className="G">GGG</span>A<span className="C">C</span><span className="T">T</span><span className="C">C</span><span className="T">T</span>A</p>
					          <button className="App button-active" onClick={() => this.gaze()} >Microscopic Gaze?</button>
					        </div>
              	</div>
		          </Fade>
		        </div>
		        <div className="App short-spacer" />
		      </div>
		    </div>
		  </div>
		);
  }
}


export default Main; 
