import React from 'react';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-image-container">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcmVudGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="about-image"
        />
        <div className="bannr-text">
          <h1 className="centered-text">About</h1>
        </div>
      </div>

      <div className="about-text col-md-5    text-center">
        <h5 className="mt-5">
          <strong>Travel safely and confidently</strong>
        </h5>
        <p className="text-muted mt-4 mb-5">
          Since 2000, we at wips have strived to provide customers with the
          easiest and most convenient way to rent a vehicle. Whether you’re
          looking for a larger utility vehicle, or something small and
          practical, we have plenty of options available. Our rates are
          affordable and our service is impeccable, so browse our inventory and
          pick the one that’s right for you.
        </p>
        <p>Learn More</p>
      </div>
    </div>
  );
};

export default AboutSection;
