import React from 'react';

import IntroSection from '../../components/introSection';
import AboutSection from '../../components/aboutSection';
import { ContactSection } from '../../components/contactSection';

import './style.css';
import CarModal from '../../components/carModal';

export const HomePage = () => {
	return (
		<div>
			{/* component one */}
			<IntroSection></IntroSection>
			<AboutSection></AboutSection>
			<ContactSection></ContactSection>
		</div>
	);
};
