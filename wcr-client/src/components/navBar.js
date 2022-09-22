import React from 'react';
import Auth from '../utils/auth';

export const Navbars = () => {
	return (
		<nav
			className=' navbar navbar-expand-lg navbar-dark '
			style={{
				backgroundColor: '#000000',
			}}
		>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#'>
					<i className='fa fa-car' aria-hidden='true'></i>| Whips
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
					<div className='navbar-nav container-fluid justify-content-between'>
						<a className='nav-link active' aria-current='page' href='/'>
							Home
						</a>
						<a className='nav-link' href='/vehicles'>
							Vehicles
						</a>
						<a className='nav-link' href='/about'>
							About
						</a>

						{/* if user is logged in show saved books and logout */}
						{Auth.loggedIn() ? (
							<>
								<li className='nav-item dropdown'>
									<a
										className='nav-link dropdown-toggle'
										href='#'
										id='navbarDropdownMenuLink'
										role='button'
										data-mdb-toggle='dropdown'
										aria-expanded='false'
									>
										{'My Account'}
									</a>
									<ul
										className='dropdown-menu'
										aria-labelledby='navbarDropdownMenuLink'
									>
										<li>
											<a className='dropdown-item' href='/accounts'>
												{' MY Profile '}
											</a>
										</li>
										<li>
											<a className='dropdown-item' href='/bookings'>
												{'My Bookings '}
											</a>
										</li>
									</ul>
								</li>
								<a className='nav-link' onClick={Auth.logout} href=''>
									{'Logout'}
								</a>
							</>
						) : (
							<>
								<a className='nav-link' href='/sign-up'>
									{' sign up'}
								</a>
								<a className='nav-link' href='/login'>
									{' login'}
								</a>
							</>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};
