import React from 'react';
import { useForm } from 'react-hook-form';
// import { useMutation } from '@apollo/client';

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
// import { LOGIN } from '../../mutations';

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm();

	const onSubmit = (formData) => {
		if (!formData.password || !formData.username) {
			setError('password', {
				type: 'manual',
				message: 'missing username or password.',
			});
		} else {
			const loginInput = {
				username: formData.username,
				password: formData.password,
			};
			console.log(loginInput);
		}
	};
	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Group className='mb-3' controlId='username'>
				<Form.Label>username</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter username'
					{...register('username', { required: true })}
				/>
				{errors.username && <p>username does not exist.</p>}
			</Form.Group>
			<Form.Group className='mb-3' controlId='password'>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type='password'
					placeholder='Password'
					{...register('password', { required: true })}
				/>
				{errors.password && <p>password is incorrect.</p>}
			</Form.Group>
			<Button variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
	);
};
