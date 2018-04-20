import React from 'react';
import { logout } from '../helpers/auth';
import {

    Navbar,
    NavbarBrand,
    Nav,
    Button
  } from 'reactstrap';


  // call helper logout method
  const logoutApp = function logoutApp () {
    console.log("App: calling App Logout");
    logout();
  }
  
function Navigation() {
    return (
        <div>
        <Navbar>
            <NavbarBrand classname="pull-left">Wake The F*** Up!!!</NavbarBrand>
            <Nav className="pull-right">
            <button onClick={() => {logoutApp}} className="btn btn-secondary">Logout</button>
            </Nav>
        </Navbar>
        </div>
    )
}

export default Navigation;

