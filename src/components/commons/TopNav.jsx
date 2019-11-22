import React from "react";
import { NavLink } from "react-router-dom";

export default function TopNav() {
  return (
    <nav class="navbar">
      <div class="container-fluid">
        <div class="header-logo">
          <NavLink href="#">
            <span className="h2">Fresh Diary</span>
          </NavLink>
        </div>

        <div class="header-body">
          <form class="search">
            <div class="row">
              <div class="col-md-4">
                <div class="input-group">
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
                href="#"
                class="d-lg-none d-sm-block nav-link search-panel-open"
              >
                <i class="fa fa-search"></i>
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <NavLink href="#" class="nav-link" data-toggle="dropdown">
                <i class="fa fa-user-o"></i>
              </NavLink>
              <div class="dropdown-menu dropdown-menu-right dropdown-menu-big">
                <div
                  class="dropdown-menu-title text-center"
                  data-backround-image="http://borderless.laborasyon.com/assets/media/image/image1.png"
                >
                  <figure class="avatar avatar-state-success avatar-sm m-b-10 bring-forward">
                    <img
                      src="http://borderless.laborasyon.com/assets/media/image/avatar.jpg"
                      class="rounded-circle"
                      alt=""
                    />
                  </figure>
                  <h6 class="text-uppercase font-size-12 m-b-0">
                    Rickie Richard
                  </h6>
                </div>
                <div class="dropdown-menu-body">
                  <div class="bg-light p-t-b-15 p-l-r-20">
                    <h6 class="text-uppercase font-size-11">
                      Profile Completion
                    </h6>
                    <div class="progress" style={{ height: "5px" }}>
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <ul class="list-group list-group-flush">
                    <NavLink href="#" class="list-group-item link-2">
                      Profile
                    </NavLink>
                    <NavLink
                      href="#"
                      class="list-group-item link-2 sidebar-open"
                      data-sidebar-target="#settings"
                    >
                      Settings
                    </NavLink>
                    <NavLink to="/" class="list-group-item text-danger">
                      Logout
                    </NavLink>
                  </ul>
                </div>
              </div>
            </li>
            <li class="nav-item d-lg-none d-sm-block">
              <NavLink href="#" class="nav-link side-menu-open">
                <i class="ti-menu"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
