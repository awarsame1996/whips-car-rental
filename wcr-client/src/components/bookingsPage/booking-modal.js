import React from 'react';
import './index.css';

export const BookingModal = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-dark btn-lg mt-2"
        data-mdb-toggle="modal"
        data-mdb-target="#exampleModall"
      >
        View Booking
      </button>
      <div
        className="modal top fade"
        id="exampleModall"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-mdb-backdrop="true"
        data-mdb-keyboard="true"
      >
        <div className="row justify-content-center modal-dialog modal-lg  modal-dialog-centered ">
          <table
            style={{
              minHeight: '20vh',
              width: '55vw',
              borderWidth: '3px',
              borderStyle: 'solid',

              borderRadius: '12px',
            }}
            className="table  align-middle mb-0 bg-white mt-5 "
          >
            <thead className="bg-light">
              <tr>
                <th>
                  <h5>Car Description</h5>
                </th>
                <th>
                  <h5>Start Date</h5>
                </th>
                <th>
                  {' '}
                  <h5>End Date</h5>
                </th>
                <th>
                  {' '}
                  <h5>Status</h5>
                </th>
                <th>
                  {' '}
                  <h5>Cost</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <div className="single-bk-image column align-items-center">
                  <div className="align-items-center">
                    <p className="fw-bold mb-1">Audi A5</p>{' '}
                  </div>
                  <img
                    style={{
                      width: '16rem',
                      height: '8rem',
                    }}
                    src="https://images.unsplash.com/photo-1602830364184-bcb58aa7d374?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGtpYSUyMGNlZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="rounded-pill mb-2 "
                  />

                  <div className="mt-2">
                    {' '}
                    <div className="car-description">
                      <div className="car-description-content">
                        {' '}
                        <div className="description-spacing">
                          <i className="fa-solid fa-user-group"></i>{' '}
                        </div>
                        <div className="description-spacing">5 </div>
                        <div className="description-spacing">
                          <i className="fa-solid fa-door-open"></i>
                        </div>
                        <div className="description-spacing">5 </div>
                        <div className="description-spacing">
                          <i className="fa-solid fa-gears"></i>
                        </div>
                        <div className="description-spacing">Manual</div>
                        <div className="description-spacing">
                          {' '}
                          <i className="fa-solid fa-suitcase"></i>
                        </div>
                        <div className="description-spacing"> Suitcase</div>
                      </div>
                      <div className="car-description-content mt-2">
                        {' '}
                        <div className="description-spacing">
                          {' '}
                          <i className="fa-solid fa-fan"></i>
                        </div>
                        <div className="description-spacing">AC</div>
                        <div className="description-spacing">
                          {' '}
                          <i className="fa-solid fa-id-card"></i>
                        </div>
                        <div className="description-spacing">21 Years</div>
                      </div>
                    </div>
                  </div>
                </div>

                <td>
                  <button
                    type="button"
                    className="btn btn-dark btn-lg btn-rounded"
                  >
                    16/09/2022
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-dark btn-lg btn-rounded"
                  >
                    21/09/2022
                  </button>
                </td>
                <td>
                  <button type="button" className=" btn-success   btn-rounded">
                    completed
                  </button>
                </td>
                <td>
                  <h4>
                    <bold>£150</bold>
                  </h4>
                </td>
              </tr>
              <tr> </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
