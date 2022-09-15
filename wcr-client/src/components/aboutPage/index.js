import React from 'react';

export const About = () => {
  return (
    <div className="aboutpage-section">
      <div className="dashboard-image">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhciUyMGRhc2hib2FyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          className="dashboard-image"
        />
        <h1 class="col-md-8 bannr-text">About Our Small Business</h1>
      </div>

      <div className="about-text col-md-8    text-center">
        <div>
          <h5 className="mt-5">
            <strong>The convenience of rentals</strong>
          </h5>
          <p className="mt-4 mb-5">
            Our Small Business was founded in 2000, and has been bringing a wide
            selection of best-in-class rental's to our customers ever since. Our
            business name has become synonymous with high-quality and excellent
            service throughout the San Francisco area.
          </p>
          <p className=" mt-4 mb-5">
            We do our best to provide a safe and convenient option for vehicle
            rental to fit every budget. We’re driven by our dedication to find
            the best solution for your travel or shipping needs, whatever they
            may be. Get in touch with us to learn more about our selection and
            the rental services we offer.
          </p>
          <p>Get In Touch</p>
        </div>
        <div className="footer-text">
          <h5>whips</h5>
          <p className="mt-4">abdilatifwarsame@gmail.com</p>
          <p>abdinasir_jirde@hotmail.com</p>
          <p className="mt-5 mb-4">
            ©2022 by wips. Proudly created with Wix.com
          </p>
        </div>
      </div>
    </div>
  );
};
