import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
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
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Row>
				<Col>
					<Form.Group className='mb-3' controlId='firstName'>
						<Form.Label>first name</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter first Name'
							{...register('firstName', { required: true })}
						/>
						{errors.firstName && <p>first name is required.</p>}
					</Form.Group>
				</Col>
				<Col>
					<Form.Group className='mb-3' controlId='firstName'>
						<Form.Label>last name</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter last Name'
							{...register('lastName', { required: true })}
						/>
					</Form.Group>
				</Col>
			</Row>
			<Form.Group className='mb-3' controlId='email'>
				<Form.Label>email</Form.Label>
				<Form.Control
					type='email'
					placeholder='Enter email'
					{...register('email', { required: true })}
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='username'>
				<Form.Label>username</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter username'
					{...register('username', { required: true })}
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='password'>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type='password'
					placeholder='Password'
					{...register('password', { required: true })}
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='confirmPassword'>
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
