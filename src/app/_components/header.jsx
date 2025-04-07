"use client";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-black rounded-5 mt-4"> 
      <Container fluid className="bg-black rounded-5"> 
        <Navbar.Brand className="text-light bg-black" href="#">
          <img className='bg-black' src="/images/logo-img.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-between bg-black" id="navbarScroll">
          <div></div>
          <Nav className="my-2 my-lg-0 bg-black" navbarScroll>
            <Nav.Link className="text-light" href="#action1">Post a Job</Nav.Link>
            <Nav.Link className="text-light" href="#action2">Explore Jobs</Nav.Link>
            <Nav.Link className="text-light" href="#action3">How It Works</Nav.Link>
          </Nav>
          <div className="d-flex btn-header bg-black">
            <Button className="me-2">Sign In</Button>
            <Button className="">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
