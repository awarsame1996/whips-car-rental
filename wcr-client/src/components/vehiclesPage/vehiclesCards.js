import React from 'react';
import { CarModal } from '../carModal';
import { TestModal } from '../test-modal';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const VehicleCard = (props) => {
  const { car } = props;

  const redirectToWhateverCarPage = () => {
    // take you to the  specific car page
    console.log('something');
  };

  const generateRandomID = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let output = '';

    for (let i = 0; i < 8; i++) {
      output += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return output;
  };

  const carID = generateRandomID();
  AOS.init();
  return (
    <div className="col-lg-3 col-md-6 mt-4 mb-5">
      <div
        data-aos="zoom-out-right"
        className="card vehicles-card text-center border border-primary shadow-0 "
        // style={{background-color:#fafafa}}
      >
        <div className=" card-header">
          <h5 className="card-title  ">
            {car.make}, {car.model}
          </h5>
          <h5 className="card-text text-muted">
            {car.specifications.seats} seats | {car.specifications.doors} doors
          </h5>
        </div>

        <div
          data-aos="zoom-out-down"
          className="bg-image card shadow-1-strong car-img mt-2 m-1"
          style={{
            backgroundImage: `url(${car.imageUrl})`,
          }}
        >
          <div data-aos="fade-down" className="card-body text-white"></div>
        </div>
        <div className="pricing mt-2 align-items-center">
          <h5 className="text-muted">Daily Price: £{car.dailyPrice}</h5>
          <h5 className="text-muted mb-1">Weekly Price: £{car.weeklyPrice}</h5>
        </div>

        <div className="card-info mb-2 mt-4 border-sm-start-none border-bottom ">
          <h7 className="text-muted">Deposit: £500</h7>
          <h7 className="text-muted">Insurance: Comprehensive</h7>
          <h7 className="text-muted mb-1">Incl. 450 miles</h7>
        </div>

				<TestModal car={car} id={carID}></TestModal>
			</div>
		</div>
	);

};
