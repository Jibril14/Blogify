import React from 'react';
import {Link, NavLink,  } from 'react-router-dom';

import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
const navbar = () => (


<div>
 
  <Navbar bg="primary" variant="dark"  expand="lg" collapseOnSelect>
    <Container>
       <NavLink to='/'>
          <Navbar.Brand >BLOGIFY</Navbar.Brand>
       </NavLink>  
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <div className="ml-auto">
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      <NavLink to='/blog'>
         <Nav.Link >Home</Nav.Link>
       </NavLink>
          <Link to='/blog'>
              <Nav.Link >News</Nav.Link> 
        </Link> 
        
        <Nav.Link to="/b">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </div>
    </Container>
  </Navbar>
</div>
    
);

export default navbar;


