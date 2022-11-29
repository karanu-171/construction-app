import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbars() {


  return (
    <Navbar collapseOnSelect expand="lg" className="nerve">    
      <Container>
        <Navbar.Brand as={ Link } to="/" className="text-white">Mega-Construct</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={ Link } to="/" className="text-white">Home</Nav.Link>
            <Nav.Link as={ Link } to="/architecture" className="text-white">Workers</Nav.Link>
            <Nav.Link as={ Link } to="/contact" className="text-white">Contact</Nav.Link>
            <Nav.Link as={ Link } to="/login" className="text-white">login</Nav.Link>
            <Nav.Link as={ Link } to="/profile" className="text-white">Profile</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container> 
     
    </Navbar>
  );
}

export default Navbars;