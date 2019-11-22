import React from "react";
import { NavLink } from "react-router-dom";

const Home = ({
  handleSubmit,
  handleInputChange,
  state: { username, password }
}) => {
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
              <center>Sign in to continue.</center>
            </p>
            <form action="#">
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="exampleInputEmail1"
                  autofocus
                  placeholder="Email or username"
                  name="username"
                  onChange={handleInputChange}
                  value={username}
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                  onChange={handleInputChange}
                  value={password}
                />
              </div>
              <button
                className="btn btn-primary btn-lg btn-block btn-uppercase mb-4"
                onClick={handleSubmit}
              >
                Sign In
              </button>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck"
                  />
                  <label className="custom-control-label" for="customCheck">
                    Keep me signed in
                  </label>
                </div>
                <NavLink to="/forgotpassword" className="auth-link text-black">
                  Forgot password?
                </NavLink>
              </div>

              <div className="text-center">
                Don't have an account?{" "}
                <NavLink to="/register" className="text-primary">
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
