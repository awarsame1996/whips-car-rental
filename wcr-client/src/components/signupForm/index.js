import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Group className='mb-3' controlId='firstName'>
				<Form.Label>first name</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter first Name'
					{...register('firstName', { required: true })}
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='firstName'>
				<Form.Label>last name</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter last Name'
					{...register('lastName', { required: true })}
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='firstName'>
				<Form.Label>email</Form.Label>
				<Form.Control
					type='email'
					placeholder='Enter email'
					{...register('email', { required: true })}
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='firstName'>
				<Form.Label>username</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter username'
					{...register('username', { required: true })}
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label>Password</Form.Label>
				<Form.Control type='password' placeholder='Password' />
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label>confirmPassword</Form.Label>
				<Form.Control type='password' placeholder='Password' />
			</Form.Group>
			<Button variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
	);

	// todo: collect the rest
};

{
	/* <form onSubmit={handleSubmit(onSubmit)}>
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
			</form> */
}
