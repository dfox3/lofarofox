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
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";

import PGallery from "./gallery"

import flyingkiss from './assets/flyingkiss-text.png'
import dummy from './assets/dummy.png'
import tintype from './assets/tintype.png'
import logo from './assets/DE_StampHead.svg'
import logo_sage from './assets/DE_StampHead-sage.svg'
import logo_slate from './assets/DE_StampHead-slate.svg'
import logo_yellow from './assets/DE_StampHead-yellow.svg'
import logo_rust from './assets/DE_StampHead-rust.svg'
import logo_white from './assets/DE_StampHead-white.svg'


class App extends Component {

  render() {
    return (
      <div className="major-container bg-white">
        <div className="App bg-sage">
          <img src={flyingkiss} style={{"width":"100%"}} alt="Image of Dylan catching Emily flying in the air for a kiss infront of the Austin, TX cityscape" />
        </div>
        <div className="App bg-sage gallery-padding">
          <PGallery photo_type="pro"/>
        </div>
        <div className="App bg-yellow gallery-padding">
          <PGallery photo_type="polaroid"/>
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
