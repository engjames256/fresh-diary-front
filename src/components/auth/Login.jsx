import React from "react";
import { NavLink } from "react-router-dom";

const Home = ({ handleSubmit }) => {
  return (
    <div class="bg-white h-100-vh p-t-0">
      <div class="page-loader">
        <div class="spinner-border"></div>
        <span>Loading</span>
      </div>

      <div class="p-b-50 d-block d-lg-none"></div>

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
            <p><center>Sign in to continue.</center></p>
            <form action="#">
              <div class="form-group mb-4">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  id="exampleInputEmail1"
                  autofocus
                  placeholder="Email or username"
                />
              </div>
              <div class="form-group mb-4">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button class="btn btn-primary btn-lg btn-block btn-uppercase mb-4">
                Sign In
              </button>
              <div class="d-flex justify-content-between align-items-center mb-4">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck"
                  />
                  <label class="custom-control-label" for="customCheck">
                    Keep me signed in
                  </label>
                </div>
                <NavLink to="/forgorpassword" class="auth-link text-black">
                  Forgot password?
                </NavLink>
              </div>

              <div class="text-center">
                Don't have an account?{" "}
                <NavLink to="/register" class="text-primary">
                  Create
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
