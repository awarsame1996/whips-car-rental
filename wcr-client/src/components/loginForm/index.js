import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { LOGIN } from '../../graphql/mutations';
import AuthService from '../../utils/auth';

export const LoginForm = () => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm();
	const [login, { loading, error }] = useMutation(LOGIN, {
		onCompleted: (data) => {
			const payload = {
				token: data.login.token,
				firstName: data.login.user.firstName,
				lastName: data.login.user.lastName,
				email: data.login.user.email,
			};

			localStorage.setItem('user', JSON.stringify(payload));

			navigate('/');
			const { token } = data.login;
			AuthService.login(token);
		},
		onError: (error) => {
			console.error(error);
		},
	});

	const onSubmit = async (formData) => {
		console.log(formData.password, formData.email);
		if (!formData.password || !formData.email) {
			setError('password', {
				type: 'manual',
				message: 'fill in all fields',
			});
		} else {
			const loginInput = {
				email: formData.email,
				password: formData.password,
			};
			console.log(loginInput);
			try {
				await login({
					variables: {
						loginInput,
					},
				});
			} catch (error) {
				console.error(error.message);
			}
		}
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='mb-3'>
				<label for='email' className='form-label'>
					Email address
				</label>
				<input
					type='email'
					className='form-control'
					id='email'
					aria-describedby='emailHelp'
					{...register('email', { required: true })}
				></input>
				<div id='emailHelp' className='form-text'>
					We'll never share your email with anyone else.
				</div>
			</div>
			<div className='mb-3'>
				<label for='password' className='form-label'>
					Password
				</label>
				<input
					type='password'
					className='form-control'
					id='password'
					{...register('password', { required: true })}
				></input>
			</div>

			<button type='submit' className='btn btn-primary'>
				Submit
			</button>
		</form>
	);
};
