import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IntroSection = () => {
	AOS.init();
	return (
		<div className='intro-section '>
			<div className='text-container'>
				<div className='d-flex flex-column justify-content-center align-items-center'>
					<h1
						data-aos='zoom-out-down'
						data-aos-delay='500'
						className='text-center banner-txt col-md-8'
					>
						<strong>WELCOME TO </strong>
					</h1>
					<h1
						data-aos='zoom-out-down'
						data-aos-delay='1000'
						className='text-center banner-txt col-md-8 gradient-text'
					>
						<strong>WHIPS</strong>
					</h1>
					<h4
						data-aos='zoom-out-down'
						data-aos-delay='1500'
						className='text-center text-muted col-md-8'
					>
						The Ultimate Rental Experience
					</h4>
				</div>

				<div className='car-imge'></div>
			</div>
		</div>
	);
};

export default IntroSection;
