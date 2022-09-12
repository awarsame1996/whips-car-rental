import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navbars = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">WHIPS</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <Nav.Link href="#Vehicles">Our Vehicles</Nav.Link>
            <Nav.Link href="#Bookings">Bookings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
