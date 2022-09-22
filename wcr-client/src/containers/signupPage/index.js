import React from 'react';

import './style.css';
import { SignupForm } from '../../components/signupForm';
import { motion } from 'framer-motion';
export const SignupPage = () => {
  return (
    <motion.section
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="background-radial-gradient overflow-hidden"
    >
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0 div-1">
            <h1 className="my-5 display-5 fw-bold ls-tight form-title ms-5">
              <span className="form-text">Sign up</span>
            </h1>
            <img
              src="https://pbs.twimg.com/media/FdF_o2CXkAI3lUT?format=png&name=small"
              className="mb-4 "
            />
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <SignupForm></SignupForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
