import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import IntroSection from '../../components/introSection';
import AboutSection from '../../components/aboutSection';
import { ContactSection } from '../../components/contactSection';
import { Footer } from '../../components/footer/footer';

import './style.css';

import { motion } from 'framer-motion';

export const HomePage = () => {
  AOS.init();
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      style={{
        backgroundImage: 'linear-gradient(50deg, white, white, purple)',
      }}
    >
      {/* component one */}
      <IntroSection></IntroSection>
      {/* <AboutSection></AboutSection> */}

      <div className=" j-card-container">
        <div
          data-aos="zoom-out-down"
          data-aos-delay="200"
          className="user-journey"
        >
          <div className="d-flex row align-items-center">
            <h2 data-aos="fade-out" data-aos-delay="700" className="content ">
              01
            </h2>
          </div>
          <h3
            data-aos="zoom-out-down"
            data-aos-delay="800"
            className="content column align items centre"
          >
            Select your perfect car
          </h3>
          <p
            data-aos="fade-down"
            data-aos-delay="900"
            className="content column align items centre "
          >
            Find the perfect car for your needs. Search by drive type and
            available dates.
          </p>
        </div>
        <div
          data-aos="zoom-out-down"
          data-aos-delay="500"
          className="user-journey"
        >
          <div className="d-flex row justify-content-center align-items-center">
            <h2
              data-aos="fade-out"
              data-aos-delay="700"
              className="content  align items centre"
            >
              02
            </h2>
          </div>
          <h3
            data-aos="zoom-out-down"
            data-aos-delay="800"
            className="content column align items centre "
          >
            Book it online
          </h3>
          <p data-aos="fade-down" data-aos-delay="900" className="content">
            Secure available dates. Then book & pay with our easy to use car
            booking system
          </p>
        </div>
        <div
          data-aos="zoom-out-down"
          data-aos-delay="500"
          className="user-journey"
        >
          <div>
            <h2
              data-aos="fade-out"
              data-aos-delay="700"
              className="content column align items centre"
            >
              03
            </h2>
          </div>
          <h3
            data-aos="zoom-out-down"
            data-aos-delay="800"
            className="content column align items centre"
          >
            Collect and Drive Right away
          </h3>
          <p
            data-aos="fade-down"
            data-aos-delay="900"
            className="content column align items centre"
          >
            The Car you reserved or similar will be waiting for you on arrival.
            Just come and enjoy our quick and easy service!
          </p>
        </div>
      </div>
      <ContactSection></ContactSection>
    </motion.div>
  );
};
