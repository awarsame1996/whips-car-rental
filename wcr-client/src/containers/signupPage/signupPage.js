import React from 'react';

import './style.css';
import { SignupForm } from '../../components/signupForm';

export const SignupPage = () => {
	return (
		<section className='background-radial-gradient overflow-hidden'>
			<div className='container px-4 py-5 px-md-5 text-center text-lg-start my-5'>
				<div className='row gx-lg-5 align-items-center mb-5'>
					<div className='col-lg-6 mb-5 mb-lg-0 div-1'>
						<h1 className='my-5 display-5 fw-bold ls-tight form-text'>
							The best offer <br />
							<span className='form-text'>for your business</span>
						</h1>
						<p className='mb-4 opacity-70 form-text'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Temporibus, expedita iusto veniam atque, magni tempora
							mollitia dolorum consequatur nulla, neque debitis eos
							reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
						</p>
					</div>

					<div className='col-lg-6 mb-5 mb-lg-0 position-relative'>
						<div
							id='radius-shape-1'
							className='position-absolute rounded-circle shadow-5-strong'
						></div>
						<div
							id='radius-shape-2'
							className='position-absolute shadow-5-strong'
						></div>

						<div className='card bg-glass'>
							<div className='card-body px-4 py-5 px-md-5'>
								<SignupForm></SignupForm>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
