import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon } from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./home";



import log from "./../images/block.png";

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="elegant-color-dark" dark expand="md">
        <MDBNavbarBrand>
        <img src={log} style = {{width : "7rem"}} className="rounded mx-auto d-block mb-2" alt="aligment" />        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="home">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="about">About</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
    );
  }
}

export default NavbarPage;
