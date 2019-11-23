import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/fresh-diary.png";

export default function TopNav({ handleLogout }) {
  return (
    <nav class="navbar">
      <div class="container-fluid">
        <div class="header-logo">
          <NavLink to="#">
            <img src={logo} alt="logo" className="logo-fresh" />
          </NavLink>
        </div>

        <div class="header-body">
          <form class="search">
            <div class="row">
              <div class="col-md-4">
                <div class="input-group search">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search ..."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-light"
                      type="button"
                      id="button-addon2"
                    >
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink
                to="#"
                class="d-lg-none d-sm-block nav-link search-panel-open"
              >
                <i class="fa fa-search"></i>
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              {localStorage.getItem("token") ? (
                <NavLink to="/login" class="nav-link">
                  <span onClick={handleLogout}>Logout</span>
                </NavLink>
              ) : (
                <NavLink to="/login" class="nav-link">
                  <span>Login</span>
                </NavLink>
              )}
            </li>
            <li class="nav-item d-lg-none d-sm-block">
              <NavLink to="#" class="nav-link side-menu-open">
                <i class="ti-menu"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
