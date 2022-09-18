import React from 'react';

export const ContactSection = () => {
  return (
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
                  <input type="text" id="form7Example1" class="form-control" />
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
  );
};
