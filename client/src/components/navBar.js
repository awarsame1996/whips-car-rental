import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

export const Navbars = () => {
	return (
		<nav
			className=' navbar navbar-expand-lg navbar-dark '
			style={{
				backgroundColor: '#000000',
			}}
		>
			<div className='container-fluid'>
				<a className='navbar-brand' href='/'>
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
						<Link className='nav-link active' aria-current='page' to='/'>
							Home
						</Link>

						<Link
							className='nav-link active'
							aria-current='page'
							to='/vehicles'
						>
							Vehicles
						</Link>
						<Link
							className='nav-link active'
							aria-current='page'
							to='/about'
						>
							About
						</Link>

						{/* if user is logged in show saved books and logout */}
						{Auth.loggedIn() ? (
							<>
								<li className='nav-item dropdown'>
									<a
										className='nav-link dropdown-toggle'
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
											<Link
												className='nav-link active'
												aria-current='page'
												to='/accounts'
											>
												my account
											</Link>
										</li>
										<li>
											<Link
												className='nav-link '
												aria-current='page'
												to='/bookings'
											>
												bookings
											</Link>
										</li>
									</ul>
								</li>
								<a className='nav-link' onClick={Auth.logout} href='/'>
									{'Logout'}
								</a>
							</>
						) : (
							<>
								<Link
									className='nav-link '
									aria-current='page'
									to='/sign-up'
								>
									sign up
								</Link>
								<Link
									className='nav-link '
									aria-current='page'
									to='/login'
								>
									Login
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};
