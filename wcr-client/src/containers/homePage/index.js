import React from 'react';

import Image from 'react-bootstrap/Image';
import IntroSection from '../../components/introSection';
import AboutSection from '../../components/aboutSection';
import contactSection from '../../components/contactSection';
import AboutPage from '../../components/aboutPage';

import './style.css';
import CarModal from '../../components/carModal';

export const HomePage = () => {
  return (
    <div>
      {/* component one */}
      {/* <IntroSection></IntroSection>
      <AboutSection></AboutSection>
      <contactSection></contactSection> */}
      {/* <AboutPage></AboutPage> */}
      <CarModal></CarModal>
    </div>
  );
};
