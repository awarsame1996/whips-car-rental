import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navbars = () => {
	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='#home'>Whips</Navbar.Brand>
					<Nav className='ml-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#Vehicles'>Vehicles</Nav.Link>
						<Nav.Link href='#Bookings'>Bookings</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};
