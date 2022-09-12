import React from 'react';
import './index.css';

const CarModal = () => {
  return (
    <div className="modal-body">
      <div className=" m-2 d-flex flex-row justify-content-center">
        <div className="car-body ">
          <img
            src="https://images.unsplash.com/photo-1602830363571-4ceac84cd397?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGtpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            className="w-100 mt-2 car-image"
          />

          <div className=" centered mb-2 mt-3 text-muted small">
            <h5 className="col-md-12 font-color mt-1 mb-2">
              Kia Ceed, citroen c3 aircross, Skoda Fabia or similar | Saloon
            </h5>

            <div className="car-features">
              <div className="font-color">
                <i className="fa-solid fa-user-group"></i>{' '}
              </div>
              <div className="font-color">5 Seats</div>
              <div className="font-color">
                <i className="fa-solid fa-door-open"></i>
              </div>
              <div className="font-color">5 Doors</div>
              <div className="font-color">
                <i className="fa-solid fa-gears"></i>
              </div>

              <div className="font-color">Manual</div>
              <div className="font-color">
                {' '}
                <i className="fa-solid fa-suitcase"></i>
              </div>
              <div className="font-color"> Suitcase</div>
              <div className="font-color">
                {' '}
                <i className="fa-solid fa-fan"></i>
              </div>
              <div className="font-color">AC</div>

              <div className="font-color">
                {' '}
                <i className="fa-solid fa-id-card"></i>
              </div>
              <div className="font-color">21 Years</div>
            </div>
          </div>
          <div className="d-flex flex-row"></div>
        </div>

        <div className=" border-sm-start-none border-start">
          <div className="payment-options">
            <h5 className="mt-1 mb-2 border-sm-start-none border-bottom">
              Your Payment Options
            </h5>
            <div className=" ">
              <input
                className="form-check-input mr-5"
                type="radio"
                name="flexRadioDefault"
              ></input>
              <label className="duration-checklist">Daily</label>
              <p className="text-muted small">choose to book daily</p>
            </div>
            <div className="check-form border-sm-start-none border-bottom">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                checked
              ></input>
              <label className="duration-checklist ">Weekly</label>
              <p className="text-muted small mb-3">choose to book weekly</p>
            </div>
            <div className="border-sm-start-none border-bottom mt-3">
              <div className="form-floating mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="startDate"
                  min="{{currentDate}}"
                />
                <label for="startDate">Booking start date</label>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center mt-3">
              <div className=" ml-3"> Total price:</div>
              <h5 className="mb-1 me-1 m-2">£120.00</h5>
            </div>

            <div className="d-flex flex-column mt-3">
              <button className="btn btn-primary btn-sm " type="button">
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModal;
