import React from 'react';

import { SINGLE_USER } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './index.css';
import AuthService from '../../utils/auth';
import { DELETEUSER, UPDATEUSER } from '../../graphql/mutations';

export const AccountPage = () => {
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm({ mode: 'all' });

	const [updateUser] = useMutation(UPDATEUSER, {
		onCompleted: (data) => {
			navigate('/', { replace: true });
		},
		onError: (error) => {
			console.error(error);
		},
	});
	const [deleteUser] = useMutation(DELETEUSER, {
		onCompleted: (data) => {
			navigate('/', { replace: true });
			AuthService.logout();
		},
		onError: (error) => {},
	});

	const user = JSON.parse(localStorage.getItem('user'));
	// use
	const { loading, error, data } = useQuery(SINGLE_USER, {
		variables: { userId: `${user.id}` },
	});

	if (loading) return 'Loading...';

	if (error) return `Error! ${error.message}`;

	if (data) {
		const { user } = data;

		const handleUpdate = async (formData) => {
			let { firstName, lastName, username, email, id } = user;

			console.log(user);

			const { firstNameInput, lastNameInput, usernameInput, emailInput } =
				formData;

			if (firstNameInput.length > 3) {
				console.log('hit');
				firstName = firstNameInput;
			}
			if (lastNameInput.length > 3) {
				lastName = lastNameInput;
			}
			if (usernameInput.length > 3) {
				username = usernameInput;
			}
			if (emailInput.length > 3) {
				email = emailInput;
			}

			const userInput = {
				firstName,
				lastName,
				username,
				email,
			};
			const userId = id;
			try {
				await updateUser({
					variables: {
						userInput,
						userId,
					},
				});
			} catch (error) {
				console.error(error.message);
			}

			swal('updated!', 'updated completed', 'success');
		};
		const handleDelete = async () => {
			const userId = user.id;
			try {
				await deleteUser({
					variables: {
						userId,
					},
				});
			} catch (error) {
				console.error(error.message);
			}
		};
		const handleConfirmation = async () => {
			if (
				!(await swal({
					text: 'Are you sure?',
					buttons: true,
					dangerMode: true,
				}))
			) {
			} else {
				handleDelete();
			}
		};

		AOS.init();
		return (
			<motion.div
				initial={{ width: 0 }}
				animate={{ width: '100%' }}
				exit={{ x: window.innerWidth, transition: { duration: 0.01 } }}
				className='d-flex row justify-content-center mb-5'
			>
				<form
					onSubmit={handleSubmit(handleUpdate)}
					style={{
						backgroundColor: '#eee',
						Height: '40vh',
						width: '68vw',
						borderWidth: '1px',
						borderStyle: 'solid',

						borderRadius: '12px',
					}}
					className='container py-3 mt-5 '
				>
					<div className='row'>
						<div className='col'>
							<nav
								aria-label='breadcrumb'
								className='bg-light rounded-3 p-3 '
							>
								<ol className='breadcrumb mb-0'>
									<li className='breadcrumb-item'>
										<a href='/'>Home</a>
									</li>
									<li className='breadcrumb-item'>
										<a href='/accounts'>My Profile</a>
									</li>
								</ol>
							</nav>
						</div>
					</div>

					<div className='row mt-3'>
						<div
							style={{
								opacity: '0.8',
								Height: '38vh',
							}}
							className='col-lg-4'
						>
							<div className='card mt-5 '>
								<div className='card-body text-center'>
									<img
										src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA/FBMVEX///88T1xhQzUAAAAsGxg2R1ItRFK1ur4mGhVkRTZhQjQjGBMpGBZhRDY3S1lbOinr6OZQNysVAABicHogFRFdQjYSAAAoFRFPOjBWNCIwRlQyIR42KSMoHRm1qqVZPjG7t7cdAABEMyve4eNEVWEhCQBMNy729PMTERAgGhctIx7QyMWss7jt7/CinZxENzWWkI9fVVN6Y1gABwmQfXUkJCRcXFx6eno1KiU7OzuaiYKdpatATVZxfoZSTU3g4+XV0tFrYmGNhoV0bGpOQkBTLRlxV0s/LSSmmpQXFxdERERoaGhVVVW8sKuGkJZTYGldSUHJzdF+iJBqd4BiGhsOAAAOGklEQVR4nO2dC3uaSBfHFdQEkGgMKFWsSiIquTe9pI1Nbbspm7aby+73/y7vzHBxuCMXB/rm/+w+8YbOj3PmzDkzA61UXvSiF73oD9LscHV8PEY6Xh3OSDcnS7VXZ98uB126C9RBAg/oifz1YvwHgJ6OP5xPOp1pr1lzqzeddADm60PSbUyh9tklhPOwYWpOO93zi5JCji/pSSidbcwJfT4unbvOzq67sfBMyM7grFyMZ73OBnwGY++MdKvja9zreANLpJqdwYp0y+Pp9Hs3AR+yY/cb6cbH0bg3TcYHNTlvk25/pL7RG3ZAtxnHpAnCNbvspOGD6hY64MzOJ2kBazX6gjRGsNqDFF2wZocnurDxZnaeClDXrYfdoloxFWBtwK8f02PSLL66TNcHeQkbRekVaRoffUsVRZsiM8Ce9gbFy1KPu6kAJUZ0JELTS9JAbs38M9EmrtrAluMNBMjoziMLN/J/n7q5EI+iSur+SBR5KIo3/lAUz4K/IpC0L6mqPlAYSjRY198xPSXN5JDtowhOVlTQep5hGAr8R7FUkMA78APwf15UFQWnnHwnDeWQ3DPwaro0Eg2qYK5AWorhR5I+MCm7K9JUmM5QHG3qht3SiGUYXtQRYu+WNBYmFGZAwN/UbkGURlwt0KB4MTEAM+GDMhB7hRkxZrUeDPiZ8UGhBKcwPfE16IVNJTsLQjEKQJwWJZyew0DKZwoIEFFmU4wxcQVNKGUTZNZioZ92XpOGQ4LpzCBrE4IUAGTivb9IwyHlYkLTiHQRpt5gwpaDCQ0jdoowLfVhmvVIYUlt1qZfSeMBDZq1Zh4mBEYEbjohXwmvupmPhZbgmNg9Jg0Ih3tQv+ZCyILcbUJ+2u3rNPvR3hJfiNxU7uXlpMBN9Sb5Kan2JDcnBYRgSOyQXuM/7uQVSaFANO2MCROeTWpyXiYERpTJh5rv06aaGyAc9IlXUOe9pph9TmqJHTV754QJe3l2Q9gRm1OygDO6NsivG4KOOKjRZAm/0E3Fp2HIb9GkdrSB4eQ3L9pHuaQ0CRdQq653NGTR/LU8RNqVFZUP6qgsr+ryrvk5XQWnw/1JMCISno467noCDSMqGge0a4jjhGGQIfmhgH2OEzR95J5QFkkTjrs10YFHSZrAmS3mTFAhINqyorD+nHGQoElOO/Kkq4txxxloRhqH6HaHsqKrqqpDb5UDOyN80/6cQcnJzlM2ILzM5iRkVNhITpBBl7IswfBh0UbkGftzI/Uamp/jVPwrZdKEXaw5vAK9bqiIzMYLT1As7MJDwCjo+EkjTrgOpQwCBE6WPMdhKVGHZtRtszMSYcLj7v76bENANeX6E0tJ0Iprz9gnHGlWtG1DXgOAo1R4hkYAUbOMyOwTXWNbvRW1dTdUBC6bWljiBMV+wgzFt8QYP921pPm6YbyUhQWhRhIWfudS6+4TEb7Zm1cUpV9hbcloCRguAmNPrhSKevWGxGzNmxYcrehRnqUF+IURDceO1pvtA75+BX9fo/WoNqaUTqNZkldbX2ebtdDvD2nNz4Ysw2zossAxfY8A51BDD15t20+RCSlKoOfeRvGiBORTC4VoJKnwEM/pYua0YBBu24hvjNbP6StX4cDykrwLiiJB0BTR3V5/MbwCChJYZsmSq5ZkxSt6joIZu+WeODPL+DlN7zubO9KEXbvkizUNx0vrIlHQXHtW9mmLkNqum7aNbshf0bTiaJHErWtD8MD5pj8gTGd37SN2nVmDQgMvQY9a253NaLdY04ccoYYVOWgHHfQpVbkGLeai1zQAIMddK/AQHVbPHO72INDQVyP0W0QIwWBF0/cYA6/B4omCWxLhdkNJ44Lq+/U5EThN5SnjCEpUdjkNTyLuwS+gIZcg4RXWHklwFk+8yskRJpQ5FSMC5ZMs4H56RZaQlcDv05iVRMk9QogRuzTYkSvggvJp/Qorwh+QCNoQEeIB09Pr2Kh+yHrOAH6ERJiQUmED8szbdPsUEiJUYAPyXF27hj+gkCNk0CkWcgOkqAVyEoL9UIYNmOe4Bjy3nYQkYX4lIhqNzJyCEKFG27EuF0nECYe0HQlyEYpk9IIMIWwAgwJBfsHU7AUL9GTLhDNjnL5fn+NcCI0zaBTZ7JaL/B8IcY61IA+Z348yxB/bBax8Qm6KGuAp87MSKs6sM9ja9pzp4d2a0F3mBzfZUszP75vfDx/fbX05/23LzPxdube/RKSRJeNp5FHqmrD1dtuAldkda3lRjGAq7nsVSWiGUprmKXbrk4kVNCRahMNQQjgVyvsQ8vDyxFDCoUkosi0iOxTbP1om4X1IQ9ElhbKmDRearEsITdKvteFQ0zRdHXlnSLFD781I1vpBagvm3zQWCvzxVG1OY1roor7AX5hrajCk9aG/CfEB3dtu5G0eC/AcMIEa+kPageyeHGDlXXAwZUR5HoTk0Vz3Y7RC6TuChB/NNuie9vHyVWw+qCvvphujvgb6SJDwp9kGzdU2RtmMDzEqbjtq5js/CRK+t7zMCTiK1//cWrhKacvL3xMk/GAROmbi1SCESOG7oVjRIvxAkPDCahqWmdqZSBLh2ZGVldIkr187sU/+GlDzb3tMYes8tiucECQce859SkAMce0LY4KEh1YjFnEB53rUMGIhMna4WhEkPLUbzof0wbmsQMngD7ytBC8Zj+FLfkmB6Q+8/R7JC7pndrNGbBDgXGJ4HeUs1m1OEIHxIiP5WNSYAR7Zz4le22UlNSjU+AIuAJsuCN7lG1mAu9cY3seMCNEONCQH/Erll9UMJchF4eYKmdsdurdsiMNdtHpq59e4YBaoWE9+ESX8ZjUDxAdfQHQNtMIBGseGIJaROXMfA6P4HCavy1/Ct+Czh4srzbeSmKM+J3LG5mELkqFEGb4k2ltWvAdqdgcdEyVc+WFhUgwktD+a06URukmUKOloO7caLwlaESWchTfOKo0ZY8+MMNQG8kAboisyBGsjirFWHiyigJVKeOMW9mZmaWhulTK3PwlDbAt86HeQrH+hfoW2DpuEE1VoO7iJiOOEXcfsDBNabJGsLKDOQgnxURBuWdTl6+trWZGcF5kYq/VBIpl3Qx2GEirOMZAxtz65dpKGhxrS13Lb020xCIMUakPS3XBd5vvKdwOxlzCsICHdDSuV5zDCeGunobH0mTRgpRI6KxpnZTF0PCQ5G2wp1E3xeRe0J5PnRd64ZaTNXnAnjYqm5rgOiMBYcW3Ze67pkmiuPPlm3ra+kMaD+h2KqMKqHpT1C0+pO1ckeDvTUMDfpOGQIrLvuTYMzlkWEXPHBYgzUO/DW5lCJGe7cX3JjbAQvRAqPDlNLtI3bsF0mwsg2Skop2bvotu7se6LceNLU3l0xRVpKKeyRyReNbnVztZR3xUOEPTF8NxmM92Svkubv7IbNIpwT09ftbPJbt4X4basQXr+GA0QoY8FyUUD9ZyuO75fkQaIoVVoTRyqDwWMoL6ajZM4689y/RuIh99Cpxk9endR5PASoPFlbL7LokeXAP3TkuLsPdGk1j+km5pQr1sMI0ZsLrmSRYZpFePm8pvrNbwmg+GVkBlVBd1goNyEFLyi259xrphLUKUnpBhGGnr51kuk5Sf0YZzjS6R/AiFk5OFVCIv5/fBalpx3gPwzCK2FCyTXfQnKRnjahv9MPNAnF2GgWp/Q51ftdqEmn7yaHe48fH6sN+p3r5DiAgJE44C7u3r98fPDTiH/TfnTnYejRqPRb9Tr9WXyyxHB0Y3GXqNx9LBTKHMe3jz2G/0q0F49FaEID68fgS8C33dwU5Ba6vTmsdHfq5pCTUx8C4InmxCerX7j8Ya8JZ8PMLxq9Qi2sH+Z0IjsLSJcfx2APCBbdpw8NjA8i7B+m5RwidvQhGwckdszdHLk4rMI60/JAA0nXbq+c69RJcO4U21UfVRPHmsYHxMaauztbJ3v8MCXzzZiAkSzF/oRAsaDLQfWB49/WjLsUN/8En3TR/0Boa8+bJHvudoP4LONuAy81XwgYDWUEAyR1a2F1Qd/B3UacbmZFdmnZQQg0JbMeBrQA11GrC836Ys2YDWMEPTGLWQAz/2gHuhG3LuMew9Tlrndq0ebsAp7Y+6eehIYYryI0IwxGFnGMiCoLKK+e6+R89gY3gU9iNXfkYws+/TbMmCUBZEaN3kCfo4FiCHW934/McGQLMuv7RcPECB+Jg+IIwJfvX3ife7YwrIM/3SL8S3jAeaJGB8QIFbrOORvRMlY96cBD0RAt+xjnwmPoltB/G8DwKrTjED9+nL589bUclntO9+O6aEW4n95AMYLMjhitR5bG/FV8xn7bzYFhIxH0WyIb1PAPCLqTgJAxBhpyGoCPoiYcT11mAwwErK6QXxxI2ZaTs2OojOZcEivvxqvJ9feUZazqp+Dq6WNMI+MB/bDVOpnOGYk7IR5K7uueFpMQICYVS11kKoT5qi9g2wAC+qjUNn46Yw0RqiyiKcPGcTR3NTPIHsrbJgx1Eh/0cm/RQ0zhvr/pgVMka5tR6mN+LnYJgQjRkojfim6CVMbsdCB1FDKcFp8EwIjpgEscDqzVqrEprAZKa402WkJ4gxUilhzU/w4A9VPPiv1WAYnBW76mBTwSzlMmMJNT8rRDVNE0//K4aTATZNO8pfFhIkH/cKXFWslnB0uRUJjKGFHLEHWbSlh9l2KlM1QssSt2HNsbiWZcyv4FJRTiWa/n0tFmGQjUYlCacJgWpLCwlA/yU6pEg0WCYeLgk8FO5VoTrHwM6W49pKsB5emsoBKVF2UKKVJmNS8EBZKL4QvhMXXC+H/KeFjo0xKQvi8UyaV9AY3L3rRi/4Q/Q8UhNDZQ5HdSwAAAABJRU5ErkJggg=='
										alt='avatar'
										className='rounded-circle img-fluid'
									/>
									<h5 className='my-3'>
										{user.firstName} {user.lastName}
									</h5>
								</div>
							</div>
						</div>
						<div
							style={{
								Height: '38vh',
								width: '43rem',
							}}
							className='card-body p-md-5 text-black '
						>
							<h3 className='mb-4 text-uppercase text-center'>
								My Profile
							</h3>

							<div className='row'>
								<div className='col-md-6 '>
									<div className='form-outline'>
										<label className='form-label m-2' for='form3Example1m'>
											First Name
										</label>
										<input
											type='text'
											id='firstName'
											className=' form-control-lg mt-1 mb-2'
											placeholder={user.firstName}
											{...register('firstNameInput')}
										/>
									</div>
									<hr />
								</div>
								<div className='col-md-6 '>
									<div className='form-outline'>
										<label className='form-label m-2' for='form3Example1m'>
											Last Name
										</label>
										<input
											type='text'
											id='form3Example1m'
											className=' form-control-lg mt-1 mb-2'
											placeholder={user.lastName}
											{...register('lastNameInput')}
										/>
									</div>
									<hr />
								</div>
							</div>
							<div className='row'>
								<div className='col-md-6 '>
									<div className='form-outline'>
										<label
											className='form-label m-2 '
											for='form3Example1m'
										>
											User Name
										</label>
										<input
											type='text'
											id='form3Example1m'
											className=' form-control-lg mt-1 mb-2'
											placeholder={user.username}
											{...register('usernameInput')}
										/>
									</div>
									<hr />
								</div>
								<div className='col-md-6 '>
									<div className='form-outline'>
										<label className='form-label m-2' for='form3Example1m'>
											Email Name
										</label>
										<input
											type='text'
											id='form3Example1m'
											className=' form-control-lg mt-1 mb-2'
											placeholder={user.email}
											{...register('emailInput')}
										/>
									</div>
									<hr />
								</div>
							</div>
						</div>
						<div className='d-flex justify-content-center pt-3 mb-4 mt-5'>
							<button
								style={{
									Height: '15rem',
									width: '25rem',
								}}
								type='submit'
								className='btn btn-primary btn-lg ms-3'
							>
								UPDATE
							</button>
							<button
								onClick={handleConfirmation}
								style={{
									Height: '15rem',
									width: '25rem',
								}}
								type='button'
								className='btn btn-danger btn-lg ms-3'
							>
								delete
							</button>
						</div>
					</div>
				</form>
				<div
					style={{
						Height: '20vh',
						width: '100vw',
					}}
				></div>
			</motion.div>
		);
	}
};
