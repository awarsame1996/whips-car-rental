import React from 'react';

const IntroSection = () => {
  return (
    <div className="intro-section ">
      <div className="text-container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center banner-txt col-md-8">
            <strong>WELCOME TO </strong>
          </h1>
          <h1 className="text-center banner-txt col-md-8 gradient-text">
            <strong>WHIPS</strong>
          </h1>
          <h4 className="text-center text-muted col-md-8">
            The Ultimate Rental Experience
          </h4>
        </div>

        <div className="car-imge">
          {/* <img
            src="https://media1.giphy.com/media/hWLML4ri0j9JtDfVbk/giphy.gif?cid=790b7611c3773c42f8bb912b92f463ea8b8a02f3a5cd8922&rid=giphy.gif&ct=g"
            className="car-imge"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
