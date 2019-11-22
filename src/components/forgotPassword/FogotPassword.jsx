import React from "react";
import { NavLink } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div class="bg-white h-100-vh p-t-0">
      <div class="p-b-50 d-block d-lg-none"></div>
      <div className="page-loader">
        <div className="spinner-border"></div>
        <span>Loading</span>
      </div>

      <div class="container h-100-vh">
        <div class="row align-items-md-center h-100-vh">
          <div class="col-lg-6 d-none d-lg-block">
            <img
              class="img-fluid"
              src="https://eagle.co.ug/wp-content/uploads/2018/02/fresh-family.png"
              alt="..."
            />
          </div>
          <div class="col-lg-4 offset-lg-1">
            <h3>Recovery Password</h3>
            <p>Change your password now</p>
            <form>
              <div class="form-group mb-4">
                <input
                  type="email"
                  class="form-control fodrm-control-lg"
                  autofocus
                  placeholder="Email Address"
                />
              </div>
              <button class="btn btn-primary btn-lg btn-block btn-uppercase mb-4">
                Submit
              </button>
              <p class="text-right">
                <NavLink to="/login" class="text-underline">
                  Sign in now
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
