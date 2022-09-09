import React from 'react';
import { Controller, useForm } from 'react-hook-form';

export const SignupForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (formData) => {
		console.log('form data', formData);
		console.log(formData.firstName);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					placeholder='first name'
					type='text'
					{...register('firstName', { required: true })}
				/>
				<input
					placeholder='last name'
					type='text'
					{...register('lastName', { required: true })}
				/>
				<input
					placeholder='email'
					type='email'
					{...register('email', { required: true })}
				/>
				<input
					placeholder='username'
					type='text'
					{...register('username', { required: true })}
				/>
				{errors.lastName && <p>Last name is required.</p>}
				<input
					placeholder='password'
					type='password'
					{...register('password', { required: true })}
				/>
				<input
					placeholder='confirm password'
					type='password'
					{...register('confirmPassword', { required: true })}
				/>
				<button type='submit'>submit</button>
			</form>
		</div>
	);

	// todo: collect the rest
};
