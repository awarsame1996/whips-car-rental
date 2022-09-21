import React from 'react';
import { LoginForm } from '../../components/loginForm';

import './style.css';

export const LoginPage = () => {
	return (
		<section className='background-radial-gradient overflow-hidden vh-75'>
			<div className='container px-4 py-5 px-md-5 text-center text-lg-start my-5'>
				<div className='row gx-lg-5 align-items-center mb-5'>
					<div className='col-lg-6 mb-5 mb-lg-0 div-1'>
						<h1 className='my-5 display-5 fw-bold ls-tight form-title ms-5'>
							<span className='form-text'>Login</span>
						</h1>
						<img
							src='https://pbs.twimg.com/media/FdF_o2CXkAI3lUT?format=png&name=small'
							className='mb-4 '
						/>
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
								<LoginForm></LoginForm>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
