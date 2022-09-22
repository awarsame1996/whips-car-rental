import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../../graphql/mutations';
import { useNavigate } from 'react-router-dom';
export const SignupForm = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'all' });
	const [signup, { loading, error }] = useMutation(SIGNUP, {
		onCompleted: (data) => {
			navigate('/login', { replace: true });
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
					{...register('firstName', {
						required: 'please input a first name',
						minLength: {
							value: 4,
							message: 'first name must be at least 4 characters long',
						},
						maxLength: {
							value: 40,
							message: 'first name must be at most 40 characters long',
						},
					})}
				></input>
				<p>{errors.firstName?.message}</p>
			</div>
			<div className='mb-3'>
				<label for='lastName' className='form-label'>
					last name
				</label>
				<input
					type='text'
					className='form-control'
					id='lastName'
					{...register('lastName', {
						required: 'please input a last name',
						minLength: {
							value: 4,
							message: 'last name must be at least 4 characters long',
						},
						maxLength: {
							value: 40,
							message: 'last name must be at most 40 characters long',
						},
					})}
				></input>
				<p>{errors.lastName?.message}</p>
			</div>
			<div className='mb-3'>
				<label for='username' className='form-label'>
					username
				</label>
				<input
					type='text'
					className='form-control'
					id='username'
					{...register('username', {
						required: 'please input a last name',
						minLength: {
							value: 4,
							message: 'username must be at least 4 characters long',
						},
						maxLength: {
							value: 30,
							message: 'username must be at most 30 characters long',
						},
					})}
				></input>
				<p>{errors.username?.message}</p>
			</div>

			<div className='mb-3'>
				<label for='email' className='form-label'>
					Email address
				</label>
				<input
					type='email'
					className='form-control'
					id='email'
					{...register('email', {
						required: 'please input a last name',
						pattern: {
							value: [
								/^([A-Za-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
							],
							message: 'email must be valid',
						},
					})}
				></input>
				<p>{errors.username?.message}</p>
			</div>

			<div className='mb-3'>
				<label for='password' className='form-label'>
					Password
				</label>
				<input
					type='password'
					className='form-control'
					id='password'
					{...register('password', { required: 'password is required' })}
				></input>
				<p>{errors.password?.message} </p>
			</div>
			<div className='mb-3'>
				<label for='confirmPassword' className='form-label'>
					Confirm Password
				</label>
				<input
					type='password'
					className='form-control'
					id='confirmPassword'
					{...register('confirmPassword', {
						required: 'confirmPassword is required',
					})}
				></input>

				<p>{errors.confirmPassword?.message} </p>
			</div>

			<button type='submit' className='btn btn-primary'>
				Submit
			</button>
		</form>
	);
};
