import React from 'react';
import Image from 'react-bootstrap/Image';
import './style.css';

export const HomePage = () => {
  return (
    <div>
      {/* component one */}
      {/* <div className="intro-section ">
        <div className="text-container">
          <div className="  mb-4  text-center">
            <h1 className="banner-txt col-md-8">
              <strong>WELCOME TO WHIPS</strong>
            </h1>
            <h4 className="text-muted col-md-8">
              The Ultimate Rental Experience
            </h4>
          </div>

          <div className="car-imge">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVTs39rumD-jz5DRLcfXK6s529q71Qj_WUg&usqp=CAU"
              className="car-imge"
            />
          </div>
        </div>
      </div> */}
      {/* <div className="about-section">
        <div className="about-image-container">
          <img
            src="data:image/jpeg;base64,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"
            className="about-image"
          />
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
            affordable and our service is impeccable, so browse our inventory
            and pick the one that’s right for you.
          </p>
          <p>Learn More</p>
        </div>
      </div> */}
      {/* <div className="contact-section-container mt-5">
        <div className="contact-section mt-5">
          <div className="">
            <div className="  mb-4  text-center">
              <h1 className="">
                <strong>GET IN TOUCH</strong>
              </h1>
              <h6 className="text-muted mt-4 ">12 Bay Tree Close</h6>
              <h6 className="text-muted mt-4 ">abdilatifwarsame@gmail.com</h6>
              <h6 className="text-muted mt-4 ">07838192864</h6>
            </div>
          </div>
          <div className="">
            <div className="card-body">
              <form>
                <div className="row mb-2">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form7Example1"
                        class="form-control"
                      />
                      <label className="form-label" for="form7Example1">
                        Name
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form7Example2"
                        class="form-control"
                      />
                      <label className="form-label" for="form7Example2">
                        Email
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form7Example1"
                        class="form-control"
                      />
                      <label className="form-label" for="form7Example1">
                        Phone
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form7Example2"
                        class="form-control"
                      />
                      <label className="form-label" for="form7Example2">
                        Address
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form7Example1"
                      class="form-control"
                    />
                    <label className="form-label" for="form7Example1">
                      Subject
                    </label>
                  </div>
                </div>

                <div className="form-outline mb-2">
                  <textarea
                    className="form-control"
                    id="form7Example7"
                    rows="4"
                  ></textarea>
                  <label className="form-label" for="form7Example7">
                    Type Your message here...
                  </label>
                </div>

                <div class="form-check d-flex justify-content-center mb-2">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form7Example8"
                    checked
                  />
                  <label className="form-check-label" for="form7Example8">
                    Create an account?
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
