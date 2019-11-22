import React from "react";
import { NavLink } from "react-router-dom";

const Register = ({ handleSubmit }) => {
  return (
    <div className="bg-white h-100-vh p-t-0">
      <div className="p-b-50 d-block d-lg-none"></div>

      <div className="container h-100-vh">
        <div className="row align-items-md-center h-100-vh">
          <div className="col-lg-6 d-none d-lg-block">
            <img
              className="img-fluid"
              src="https://eagle.co.ug/wp-content/uploads/2018/02/fresh-family.png"
              alt="..."
            />
          </div>
          <div className="col-lg-4 offset-lg-1">
            <p>
              <center>Create a new account</center>
            </p>
            <form>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  autofocus
                  placeholder="Username"
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Full Name"
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-4">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-4">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch"
                    checked=""
                  />
                  <label className="custom-control-label" for="customSwitch">
                    I agree to the Terms and Privacy.
                  </label>
                </div>
              </div>
              <button className="btn btn-primary btn-lg btn-block btn-uppercase mb-4">
                Create Account
              </button>
              <p className="text-right">
                <NavLink to="/" className="text-underline">
                  Already a user?
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
