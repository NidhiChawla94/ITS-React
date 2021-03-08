import React, { Component } from 'react';
import './App.css';
import {Nav, NavItem} from 'react-bootstrap';
import firebase from 'firebase';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {

    handleSignout = () => {
        const vm = this;
        vm.setState({
            user: null,
            type: null
        });
        localStorage.setItem('type', null);
        firebase.auth().signOut().then(function () {
            alert('You have been signed out');
        });
    }


  render() {
    return (
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Navbar.Brand href="#">Ticket System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/*Show signout option if user is logged in*/}
            {this.props.userKey !== null &&
              <NavItem onClick={this.handleSignout}>Sign out</NavItem>
            }
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
