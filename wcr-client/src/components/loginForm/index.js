import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../graphql/mutations';

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm();
	const [login, { loading, error }] = useMutation(LOGIN, {
		onCompleted: (data) => {
			console.log(data);
		},
		onError: (error) => {
			console.error(error);
		},
	});

	const onSubmit = async (formData) => {
		if (!formData.password || !formData.username) {
			setError('password', {
				type: 'manual',
				message: 'fill in all fields',
			});
		} else {
			const loginInput = {
				username: formData.username,
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
