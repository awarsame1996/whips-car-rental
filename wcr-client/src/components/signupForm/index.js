import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';

import { SIGNUP } from '../../mutations';

export const SignupForm = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm();

	const [signup, { loading, error }] = useMutation(SIGNUP, {
		onCompleted: (data) => {
			console.log(data);
		},
		onError: (error) => {
			console.error(error);
		},
	});

	const onSubmit = async (formData) => {
		const {
			firstName,
			lastName,
			username,
			email,
			password,
			confirmPassword,
		} = formData;
		if (password !== confirmPassword) {
			setError('confirmPassword', {
				type: 'manual',
				message: 'Passwords do not match.',
			});
		} else {
			const signupInput = {
				firstName,
				lastName,
				username,
				email,
				password,
			};
			console.log(signupInput);

			try {
				await signup({
					variables: {
						signupInput,
					},
				});
			} catch (error) {
				console.error(error.message);
			}
		}
	};

	if (loading) {
		return <div>Lodaing...</div>;
	}

	if (error) {
		return <div>error...</div>;
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='mb-3'>
				<label for='firstName' className='form-label'>
					first name
				</label>
				<input
					type='text'
					className='form-control'
					id='firstName'
					{...register('firstName', { required: true })}
				></input>
			</div>
			<div className='mb-3'>
				<label for='lastName' className='form-label'>
					last name
				</label>
				<input
					type='text'
					className='form-control'
					id='lastName'
					{...register('lastName', { required: true })}
				></input>
			</div>
			<div className='mb-3'>
				<label for='username' className='form-label'>
					username
				</label>
				<input
					type='text'
					className='form-control'
					id='username'
					{...register('username', { required: true })}
				></input>
			</div>

			<div className='mb-3'>
				<label for='email' className='form-label'>
					Email address
				</label>
				<input
					type='email'
					className='form-control'
					id='email'
					{...register('email', { required: true })}
				></input>
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
			<div className='mb-3'>
				<label for='confirmPassword' className='form-label'>
					Confirm Password
				</label>
				<input
					type='password'
					className='form-control'
					id='confirmPassword'
					{...register('confirmPassword', { required: true })}
				></input>
			</div>

			<button type='submit' className='btn btn-primary'>
				Submit
			</button>
		</form>
	);
};
