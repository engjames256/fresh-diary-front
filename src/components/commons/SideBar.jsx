import React from "react";
import "../../index.css";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="side-menu">
      <div className="side-menu-body">
        <ul>
          <li className="side-menu-divider m-t-0"></li>
          <li>
            <NavLink to="#">
              <i className="icon fa fa-globe"></i>
              <span>Dashboard</span>
            </NavLink>
            <ul>
              <li>
                <NavLink to="#">Sales & CRM</NavLink>
              </li>
              <li>
                <NavLink to="#">Helpdesk</NavLink>
              </li>
              <li>
                <NavLink to="#">Website Analytics</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="#">
              <i className="icon fa fa-rocket"></i>
              <span>Apps</span>
            </NavLink>
            <ul>
              <li>
                <NavLink to="#">Chat</NavLink>
              </li>
              <li>
                <NavLink to="#">Email</NavLink>
                <ul>
                  <li>
                    <NavLink to="#">Inbox</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Email Read</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Compose</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="#">Calendar</NavLink>
              </li>
            </ul>
          </li>
          <li className="side-menu-divider m-t-10">Elements</li>
          <li className="open">
            <NavLink to="#">
              <i className="icon fa fa-pagelines"></i>
              <span>Basic Elements</span>
            </NavLink>
            <ul>
              <li>
                <NavLink to="#">Alerts </NavLink>
              </li>
              <li>
                <NavLink to="#">Badge </NavLink>
              </li>
              <li>
                <NavLink to="#">Buttons </NavLink>
              </li>
              <li>
                <NavLink to="#">Pagination </NavLink>
              </li>
              <li>
                <NavLink to="#">Dropdown </NavLink>
              </li>
              <li>
                <NavLink to="#">Accordion </NavLink>
              </li>
              <li>
                <NavLink to="#">Cards </NavLink>
                <ul>
                  <li>
                    <NavLink to="#">Basic Cards </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Image Cards </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Card Scroll </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Others </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="#">Colors </NavLink>
              </li>
              <li>
                <NavLink to="#">Carousel </NavLink>
              </li>
              <li>
                <NavLink to="#">Typography </NavLink>
              </li>
              <li>
                <NavLink to="#">List Group </NavLink>
              </li>
              <li>
                <NavLink to="#">Media Object </NavLink>
              </li>
              <li>
                <NavLink to="#">Images </NavLink>
              </li>
              <li>
                <NavLink to="#">Progress </NavLink>
              </li>
              <li>
                <NavLink to="#">Modal </NavLink>
              </li>
              <li>
                <NavLink to="#">Spinners </NavLink>
              </li>
              <li>
                <NavLink className="active" to="#">
                  Navs{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="#">Tab </NavLink>
              </li>
              <li>
                <NavLink to="#">Tooltip </NavLink>
              </li>
              <li>
                <NavLink to="#">Popovers </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="#">
              <i className="icon ti-paint-roller"></i>
              <span>Advanced UI</span>
            </NavLink>
            <ul>
              <li>
                <NavLink to="#">Sweet Alert </NavLink>
              </li>
              <li>
                <NavLink to="#">Light Box </NavLink>
              </li>
              <li>
                <NavLink to="#">Toast </NavLink>
              </li>
              <li>
                <NavLink to="#">Tour </NavLink>
              </li>
              <li>
                <NavLink to="#">Slick Slide </NavLink>
              </li>
              <li>
                <NavLink to="#">Nestable </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="#">
              <i className="icon ti-clipboard"></i>
              <span>Forms</span>
            </NavLink>
            <ul>
              <li>
                <NavLink to="#">Basic Form </NavLink>
              </li>
              <li>
                <NavLink to="#">Custom Form </NavLink>
              </li>
              <li>
                <NavLink to="#">Advanced Form </NavLink>
              </li>
              <li>
                <NavLink to="#">Datepicker </NavLink>
              </li>
              <li>
                <NavLink to="#">Timepicker </NavLink>
              </li>
              <li>
                <NavLink to="#">Colorpicker </NavLink>
              </li>
              <li>
                <NavLink to="#">Form Validation </NavLink>
              </li>
              <li>
                <NavLink to="#">Form Wizard </NavLink>
              </li>
              <li>
                <NavLink to="#">File Upload </NavLink>
              </li>
              <li>
                <NavLink to="#">CKEditor</NavLink>
                <ul>
                  <li>
                    <NavLink to="#">Article Editor </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Inline Editor </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="#">
              <i className="icon fa fa-table"></i>
              <span>Tables</span>
            </NavLink>
            <ul>
              <li>
                <NavLink to="#">Basic Tables </NavLink>
              </li>
              <li>
                <NavLink to="#">Data Table </NavLink>
              </li>
              <li>
                <NavLink to="#">Responsive Table </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="#">
              <i className="icon fa fa-user-circle-o"></i>
              <span>Avatars</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="icons.html">
              <i className="icon ti-crown"></i>
              <span>Icons</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <i className="icon ti-pie-chart"></i>
              <span>Charts</span>
            </NavLink>
            <ul>
              <li>
                <NavLink to="#">Apex</NavLink>
              </li>
              <li>
                <NavLink to="#">Chartjs</NavLink>
              </li>
              <li>
                <NavLink to="#">Justgage</NavLink>
              </li>
              <li>
                <NavLink to="#">Morsis</NavLink>
              </li>
              <li>
                <NavLink to="#">Peity</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="#">
              <i className="icon ti-map"></i>
              <span>Maps</span>
            </NavLink>
            <ul>
              <li>
                <NavLink to="#">Google Map</NavLink>
              </li>
              <li>
                <NavLink to="#">Vector Map</NavLink>
              </li>
            </ul>
          </li>
          <li className="side-menu-divider m-t-10">User Pages</li>
          <li>
            <NavLink to="#">
              <i className="icon ti-face-smile"></i> <span>Authentication</span>{" "}
            </NavLink>
            <ul>
              <li>
                <NavLink to="#">Login </NavLink>
              </li>
              <li>
                <NavLink to="#">Register </NavLink>
              </li>
              <li>
                <NavLink to="#">Recovery Password </NavLink>
              </li>
              <li>
                <NavLink to="#">Lock Screen </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="#">
              <i className="icon ti-files"></i>
              <span>Pages</span>
            </NavLink>
            <ul>
              <li>
                <NavLink to="#">Profile </NavLink>
              </li>
              <li>
                <NavLink to="#">Timeline </NavLink>
              </li>
              <li>
                <NavLink to="#">Invoice </NavLink>
              </li>
              <li>
                <NavLink to="#">Pricing Tables </NavLink>
              </li>
              <li>
                <NavLink to="#">Search Result </NavLink>
              </li>
              <li>
                <NavLink to="#">Email Templates</NavLink>
                <ul>
                  <li>
                    <NavLink to="#">Basic</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Alert</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Billing</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="#">Error Pages </NavLink>
                <ul>
                  <li>
                    <NavLink to="#">404 </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">404 Alternative </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Mean at Work </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="#">Starter Page</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="#">
              <i className="icon ti-menu"></i>
              <span>Menu Level</span>
            </NavLink>
            <ul>
              <li>
                <NavLink to="#">Menu Level </NavLink>
                <ul>
                  <li>
                    <NavLink to="#">Menu Level </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <div className="side-menu-status-bars">
          <h6 className="text-uppercase font-size-11 m-b-10">Users</h6>
          <ul className="list-inline m-b-20">
            <li className="list-inline-item">
              <NavLink to="#">
                <figure className="avatar avatar-state-warning avatar-xs">
                  <img
                    src="http://borderless.laborasyon.com/assets/media/image/avatar.jpg"
                    className="rounded-circle"
                    alt=""
                  />
                </figure>
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink to="#">
                <figure className="avatar avatar-state-success avatar-xs">
                  <span className="avatar-title bg-primary rounded-circle">
                    E
                  </span>
                </figure>
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink to="#">
                <figure className="avatar avatar-state-success avatar-xs">
                  <span className="avatar-title bg-danger rounded-circle">
                    SC
                  </span>
                </figure>
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink to="#">
                <figure className="avatar avatar-state-warning avatar-xs">
                  <span className="avatar-title bg-info rounded-circle">A</span>
                </figure>
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink to="#">
                <figure className="avatar avatar-xs">
                  <span className="avatar-title bg-dark font-size-14 rounded-circle">
                    +5
                  </span>
                </figure>
              </NavLink>
            </li>
          </ul>
          <h6 className="text-uppercase font-size-11 m-b-10 d-flex justify-content-between">
            Storage <span className="text-muted">%85</span>
          </h6>
          <div className="progress" style={{ height: "5px" }}>
            <div
              className="progress-bar bg-danger-gradient"
              role="progressbar"
              style={{
                width: "85%",
                ariaValuenow: "25",
                ariaValuemin: "0",
                ariaValuemax: "100"
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
