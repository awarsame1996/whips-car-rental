import React from 'react';

import IntroSection from '../../components/introSection';
import AboutSection from '../../components/aboutSection';
import { ContactSection } from '../../components/contactSection';

import './style.css';
import CarModal from '../../components/carModal';

export const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(50deg, white, white, purple)',
      }}
    >
      {/* component one */}
      <IntroSection></IntroSection>
      {/* <AboutSection></AboutSection> */}
      {/* <ContactSection></ContactSection> */}
      <div className="j-card-container">
        <div className="user-journey">
          <div className="d-flex row align-items-center">
            <h2 className="content ">01</h2>
          </div>
          <h3 className="content column align items centre">
            Select your perfect car
          </h3>
          <p className="content column align items centre ">
            Find the perfect car for your needs. Search by drive type and
            available dates.
          </p>
        </div>
        <div className="user-journey">
          <div className="d-flex row justify-content-center align-items-center">
            <h2 className="content  align items centre">02</h2>
          </div>
          <h3 className="content column align items centre ">Book it online</h3>
          <p className="content">
            Secure available dates. Then book & pay with our easy to use car
            booking system
          </p>
        </div>
        <div className="user-journey">
          <div>
            <h2 className="content column align items centre">03</h2>
          </div>
          <h3 className="content column align items centre">
            Collect and Drive Right away
          </h3>
          <p className="content column align items centre">
            The Car you reserved or similar will be waiting for you on arrival.
            Just come and enjoy our quick and easy service!
          </p>
        </div>
      </div>
      {/* <ContactSection></ContactSection> */}
    </div>
  );
};
