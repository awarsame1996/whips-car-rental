import React from 'react';

export const Navbars = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark bg-light'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#'>
					Navbar
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-mdb-toggle='collapse'
					data-mdb-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<i className='fas fa-bars'></i>
				</button>
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav'>
						<a className='nav-link active' aria-current='page' href='/'>
							Home
						</a>
						<a className='nav-link' href='/vehicles'>
							Vehicles
						</a>
						<a className='nav-link' href='/about'>
							About
						</a>
						<a className='nav-link disabled'>Disabled</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
