import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ContactSection = () => {
	AOS.init();
	return (
		<div className='contact-container mb-4 mt-2 '>
			<div className=' contact-info   mb-5  '>
				<h1 data-aos='zoom-out-down' className='text-center'>
					<strong>GET IN TOUCH</strong>
				</h1>
				<h5 data-aos='zoom-out-down' className=' mt-4 text-center '>
					Whips Car Rental
				</h5>

				<h6 data-aos='fade-down' className='text-muted mt-4 text-center '>
					Address: 163 Fordhouse Ln, Stirchley, Birmingham B30 3AG{' '}
				</h6>
				<h6 data-aos='fade-down' className='text-muted text-center mt-4 '>
					Monday to Friday: Opens 9am to 5pm
				</h6>
				<h6 data-aos='fade-down' className='text-muted text-center mt-4 '>
					Phone: 0121 272 7711
				</h6>
			</div>

			<div className=' contact-info '>
				<form className=''>
					<div className='row mb-4'>
						<div className='col'>
							<div data-aos='zoom-out-down' className='form-outline'>
								<input
									style={{
										backgroundImage:
											'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAUBJREFUOBGVVE2ORUAQLvIS4gwzEysHkHgnkMiEc4zEJXCMNwtWTmDh3UGcYoaFhZUFCzFVnu4wIaiE+vvq6+6qTgthGH6O4/jA7x1OiCAIPwj7CoLgSXDxSjEVzAt9k01CBKdWfsFf/2WNuEwc2YqigKZpK9glAlVVwTTNbQJZlnlCkiTAZnF/mePB2biRdhwHdF2HJEmgaRrwPA+qqoI4jle5/8XkXzrCFoHg+/5ICdpm13UTho7Q9/0WnsfwiL/ouHwHrJgQR8WEwVG+oXpMPaDAkdzvd7AsC8qyhCiKJjiRnCKwbRsMw9hcQ5zv9maSBeu6hjRNYRgGFuKaCNwjkjzPoSiK1d1gDDecQobOBwswzabD/D3Np7AHOIrvNpHmPI+Kc2RZBm3bcp8wuwSIot7QQ0PznoR6wYSK0Xb/AGVLcWwc7Ng3AAAAAElFTkSuQmCC)',
										backgroundRepeat: 'no-repeat',
										backgroundAttachment: 'scroll',
										backgroundSize: '16px 18px',
										backgroundPosition: '98% 50%',
									}}
									type='text'
									id='form3Example1'
									className='form-control'
								/>
								<label
									style={{
										marginLeft: '0px',
									}}
									className='form-label'
									htmlFor='form3Example1'
								>
									First name
								</label>
								<div className='form-notch'>
									<div
										style={{
											width: '9px',
										}}
										className='form-notch-leading'
									></div>
									<div
										style={{
											width: '68.8px',
										}}
										className='form-notch-middle'
									></div>
									<div className='form-notch-trailing'></div>
								</div>
							</div>
						</div>
						<div className='col'>
							<div data-aos='zoom-out-down' className='form-outline'>
								<input
									style={{
										backgroundImage:
											'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAUBJREFUOBGVVE2ORUAQLvIS4gwzEysHkHgnkMiEc4zEJXCMNwtWTmDh3UGcYoaFhZUFCzFVnu4wIaiE+vvq6+6qTgthGH6O4/jA7x1OiCAIPwj7CoLgSXDxSjEVzAt9k01CBKdWfsFf/2WNuEwc2YqigKZpK9glAlVVwTTNbQJZlnlCkiTAZnF/mePB2biRdhwHdF2HJEmgaRrwPA+qqoI4jle5/8XkXzrCFoHg+/5ICdpm13UTho7Q9/0WnsfwiL/ouHwHrJgQR8WEwVG+oXpMPaDAkdzvd7AsC8qyhCiKJjiRnCKwbRsMw9hcQ5zv9maSBeu6hjRNYRgGFuKaCNwjkjzPoSiK1d1gDDecQobOBwswzabD/D3Np7AHOIrvNpHmPI+Kc2RZBm3bcp8wuwSIot7QQ0PznoR6wYSK0Xb/AGVLcWwc7Ng3AAAAAElFTkSuQmCC)',
										backgroundRepeat: 'no-repeat',
										backgroundAttachment: 'scroll',
										backgroundSize: '16px 18px',
										backgroundPosition: '98% 50%',
									}}
									type='text'
									id='form3Example2'
									className='form-control'
								/>
								<label
									style={{
										marginLeft: '0px',
									}}
									className='form-label'
									htmlFor='form3Example2'
								>
									Last name
								</label>
								<div className='form-notch'>
									<div
										style={{
											width: '9px',
										}}
										className='form-notch-leading'
									></div>
									<div
										style={{
											width: '68px',
										}}
										className='form-notch-middle'
									></div>
									<div className='form-notch-trailing'></div>
								</div>
							</div>
						</div>
					</div>

					<div data-aos='zoom-out-down' className='form-outline mb-4'>
						<input
							style={{
								backgroundImage:
									'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAUBJREFUOBGVVE2ORUAQLvIS4gwzEysHkHgnkMiEc4zEJXCMNwtWTmDh3UGcYoaFhZUFCzFVnu4wIaiE+vvq6+6qTgthGH6O4/jA7x1OiCAIPwj7CoLgSXDxSjEVzAt9k01CBKdWfsFf/2WNuEwc2YqigKZpK9glAlVVwTTNbQJZlnlCkiTAZnF/mePB2biRdhwHdF2HJEmgaRrwPA+qqoI4jle5/8XkXzrCFoHg+/5ICdpm13UTho7Q9/0WnsfwiL/ouHwHrJgQR8WEwVG+oXpMPaDAkdzvd7AsC8qyhCiKJjiRnCKwbRsMw9hcQ5zv9maSBeu6hjRNYRgGFuKaCNwjkjzPoSiK1d1gDDecQobOBwswzabD/D3Np7AHOIrvNpHmPI+Kc2RZBm3bcp8wuwSIot7QQ0PznoR6wYSK0Xb/AGVLcWwc7Ng3AAAAAElFTkSuQmCC)',
								backgroundRepeat: 'no-repeat',
								backgroundAttachment: 'scroll',
								backgroundSize: '16px 18px',
								backgroundPosition: '98% 50%',
							}}
							type='email'
							id='form3Example3'
							className='form-control'
						/>
						<label
							style={{
								marginLeft: '0px',
							}}
							data-aos='fade-down'
							className='form-label'
							htmlFor='form3Example3'
						>
							Email address
						</label>
						<div className='form-notch'>
							<div
								style={{
									width: '9px',
								}}
								className='form-notch-leading'
							></div>
							<div
								style={{
									width: '88.8px',
								}}
								className='form-notch-middle'
							></div>
							<div className='form-notch-trailing'></div>
						</div>
					</div>

					<div data-aos='zoom-out-down' className='form-outline mb-4'>
						<textarea
							className='form-control'
							id='form4Example3'
							rows='4'
						></textarea>
						<label
							style={{
								margin_left: '0px',
							}}
							className='form-label'
							htmlFor='form4Example3'
						>
							Message
						</label>
						<div className='form-notch'>
							<div
								style={{
									width: '9px',
								}}
								className='form-notch-leading'
							></div>
							<div
								style={{
									width: '60px',
								}}
								className='form-notch-middle'
							></div>
							<div className='form-notch-trailing'></div>
						</div>
					</div>

					{/* <!-- Submit button --> */}
					<button type='submit' className='btn btn-primary btn-block mb-4'>
						SUBMIT
					</button>
				</form>
			</div>
		</div>
	);
};
