import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (            
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand><NavLink to="/">Aristocrat Restaurent</NavLink></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto linkStyle">
        <Nav.Link ><NavLink to="/">Home</NavLink></Nav.Link>
        <Nav.Link> <NavLink to="/meals">Meals</NavLink></Nav.Link>
        <Nav.Link> <NavLink to="/about">About</NavLink></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;