import React from 'react';
import Image from 'react-bootstrap/Image';
import IntroSection from '../../components/introSection';
import AboutSection from '../../components/aboutSection';
import './style.css';

export const HomePage = () => {
  return (
    <div>
      {/* component one */}
      <IntroSection></IntroSection>
      <AboutSection></AboutSection>
      <div className="contact-section-container mt-5">
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
      </div>
      {/* About page section */}

      {/* <div className="aboutpage-section">
        <div className="dashboard-image">
          <img
            src="https://images.unsplash.com/photo-1562618817-253b06cf2b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwZGFzaGJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            className="dashboard-image"
          />
        </div>

        <div className="about-text col-md-5    text-center">
          <h5 className="mt-5">
            <strong>The convenience of rentals</strong>
          </h5>
          <p className="mt-4 mb-5">
            Our Small Business was founded in 2000, and has been bringing a wide
            selection of best-in-class rentals to our customers ever since. Our
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
          <h6>whips</h6>
          <p>abdilatifwarsame@gmail.com</p>
          <p>abdinasir_jirde@hotmail.com</p>
          <p>©2022 by wips. Proudly created with Wix.com</p>
        </div>
      </div> */}
    </div>
  );
};
