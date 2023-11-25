import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Navbar.css'
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <Navbar expand= "lg" className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand className='head fw-bold' href='#home'>Child To <div className='men'>Men</div></Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-nav'/>
        <Navbar.Collapse id='navbar-nav'>
          <Nav className='ms-auto fw-bold'>
            <Nav.Link className='glow'><Link to="/home" className='gl'>Home</Link></Nav.Link>
            <Nav.Link className='glow' ><Link to="/shirt" className='gl' >Shirts</Link></Nav.Link>
            <Nav.Link className='glow' ><Link to="/pant" className='gl' >Pants</Link></Nav.Link>
            <Nav.Link className='glow' ><Link to="/tshirts" className='gl' >T-Shirts</Link></Nav.Link>
            <Nav.Link className='glow' ><Link to="/innerwears" className='gl' >Innerwear</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default nav
