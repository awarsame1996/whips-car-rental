import React from 'react';

export const VehicleCard = (props) => {
  const { car } = props;

  const redirectToWhateverCarPage = () => {
    // take you to the  specific car page
    console.log('something');
  };

  return (
    <div className="card  m-5 vehicle-card">
      <div className="card-headr align-items-center">
        {' '}
        <h5 class="">
          {car.make}, {car.model}
        </h5>
        <p className="card-text">
          {car.seats} | {car.doors} | {car.transmission}
        </p>
      </div>
      <img
        src="https://media.istockphoto.com/photos/illustration-of-generic-hatchback-car-perspective-view-picture-id1150425295?b=1&k=20&m=1150425295&s=170667a&w=0&h=6RQC_JidCDrQYd_9JHFC5ANGp70KBg9nj_TpEDu-NZk="
        class="card-img mt-3"
        alt="Stony Beach"
      />

      <div className="mt-3 mb-2 card-descrption  align-items-center ">
        <div className="pricing align-items-center">
          <h5 className="card-title">Price: £{car.price}</h5>
          <h5>
            Discounted price: <s>£1600.00</s>
          </h5>
        </div>
        <h7 className="mt-4">Brand:</h7>
        <h7 className="mt-2">Deposit: £500</h7>
        <h7 className="mt-2">Insurance: Comperhensive</h7>
        <h7 className="mt-2">Incl. 450 miles</h7>
      </div>

      <a
        className="btn Vehicle-card-btn m-1"
        onClick={redirectToWhateverCarPage}
      >
        Button
      </a>
    </div>
  );
};
