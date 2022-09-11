import React from 'react';

const IntroSection = () => {
  return (
    <div className="intro-section ">
      <div className="text-container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center banner-txt col-md-8">
            <strong>WELCOME TO WHIPS</strong>
          </h1>
          <h4 className="text-center text-muted col-md-8">
            The Ultimate Rental Experience
          </h4>
        </div>

        <div className="car-imge">
          <img
            src="https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            className="car-imge"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
