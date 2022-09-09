import React from 'react';
import { useForm } from 'react-hook-form';
// import { useMutation } from '@apollo/client';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { SIGNUP } from '../../mutations';

export const SignupForm = () => {
	// const signup = useMutation(SIGNUP);

	const {
		register,
		handleSubmit,
		setError,
		clearErrors,
		formState: { errors },
	} = useForm();

	const onSubmit = (formData) => {
		if (formData.password !== formData.confirmPassword) {
			setError('confirmPassword', {
				type: 'manual',
				message: 'Passwords do not match.',
			});
		} else {
			const signupInput = {
				firstName: formData.firstName,
				lastName: formData.lastName,
				username: formData.username,
				email: formData.email,
				password: formData.password,
				// };

				// signup({
				// 	variables: {
				// 		signupInput,
				// 	},
				// });
			};
			console.log(signupInput);
		}
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
				{errors.lastName && <p>Last name is required.</p>}
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
				<Form.Control
					type='password'
					placeholder='Password'
					{...register('password', { required: true })}
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label>confirmPassword</Form.Label>
				<Form.Control
					type='password'
					placeholder='Password'
					{...register('confirmPassword', { required: true })}
				/>
				{errors.confirmPassword && <p>pssword do not match.</p>}
			</Form.Group>
			<Button variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
	);

	// todo: collect the rest
};
