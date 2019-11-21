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
=======
    <div className='side-menu-body'>
        <ul>
            <li className="side-menu-divider m-t-0"></li>
            <li>
                <NavLink to="#">
                    <i className="icon fa fa-globe"></i>
                    <span>Dashboard</span>
                </NavLink>
                <ul>
                    <li>
                        <NavLink to="dashboard-one.html">Sales & CRM</NavLink>
                    </li>
                    <li>
                        <NavLink to="dashboard-two.html">Helpdesk</NavLink>
                    </li>
                    <li>
                        <NavLink to="dashboard-three.html">Website Analytics</NavLink>
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
                        <NavLink to="chat.html">Chat</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">Email</NavLink>
                        <ul>
                            <li>
                                <NavLink to="inbox.html">Inbox</NavLink>
                            </li>
                            <li>
                                <NavLink to="read-email.html">Email Read</NavLink>
                            </li>
                            <li>
                                <NavLink to="compose-email.html">Compose</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="calendar.html">Calendar</NavLink>
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
                    <li><NavLink to="alerts.html">Alerts </NavLink></li>
                    <li><NavLink to="badge.html">Badge </NavLink></li>
                    <li><NavLink to="buttons.html">Buttons </NavLink></li>
                    <li><NavLink to="pagination.html">Pagination </NavLink></li>
                    <li><NavLink to="dropdown.html">Dropdown </NavLink></li>
                    <li><NavLink to="accordion.html">Accordion </NavLink></li>
                    <li><NavLink to="#">Cards </NavLink>
                        <ul>
                            <li><NavLink to="basic-cards.html">Basic Cards </NavLink></li>
                            <li><NavLink to="image-cards.html">Image Cards </NavLink></li>
                            <li><NavLink to="card-scroll.html">Card Scroll </NavLink></li>
                            <li><NavLink to="other-cards.html">Others </NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="colors.html">Colors </NavLink></li>
                    <li><NavLink to="carousel.html">Carousel </NavLink></li>
                    <li><NavLink to="typography.html">Typography </NavLink></li>
                    <li><NavLink to="list-group.html">List Group </NavLink></li>
                    <li><NavLink to="media-object.html">Media Object </NavLink></li>
                    <li><NavLink to="images.html">Images </NavLink></li>
                    <li><NavLink to="progress.html">Progress </NavLink></li>
                    <li><NavLink to="modal.html">Modal </NavLink></li>
                    <li><NavLink to="spinners.html">Spinners </NavLink></li>
                    <li><NavLink className="active" to="navs.html">Navs </NavLink></li>
                    <li><NavLink to="tab.html">Tab </NavLink></li>
                    <li><NavLink to="tooltip.html">Tooltip </NavLink></li>
                    <li><NavLink to="popovers.html">Popovers </NavLink></li>
                </ul>
            </li>
            <li>
                <NavLink to="#">
                    <i className="icon ti-paint-roller"></i>
                    <span>Advanced UI</span>
                </NavLink>
                <ul>
                    <li><NavLink to="sweet-alert.html">Sweet Alert </NavLink></li>
                    <li><NavLink to="lightbox.html">Light Box </NavLink></li>
                    <li><NavLink to="toast.html">Toast </NavLink></li>
                    <li><NavLink to="tour.html">Tour </NavLink></li>
                    <li><NavLink to="slick-slide.html">Slick Slide </NavLink></li>
                    <li><NavLink to="nestable.html">Nestable </NavLink></li>
                </ul>
            </li>
            <li>
                <NavLink to="#">
                    <i className="icon ti-clipboard"></i>
                    <span>Forms</span>
                </NavLink>
                <ul>
                    <li><NavLink to="basic-form.html">Basic Form </NavLink></li>
                    <li><NavLink to="custom-form.html">Custom Form </NavLink></li>
                    <li><NavLink to="advanced-form.html">Advanced Form </NavLink></li>
                    <li><NavLink to="datepicker.html">Datepicker </NavLink></li>
                    <li><NavLink to="timepicker.html">Timepicker </NavLink></li>
                    <li><NavLink to="colorpicker.html">Colorpicker </NavLink></li>
                    <li><NavLink to="form-validation.html">Form Validation </NavLink></li>
                    <li><NavLink to="form-wizard.html">Form Wizard </NavLink></li>
                    <li><NavLink to="file-upload.html">File Upload </NavLink></li>
                    <li><NavLink to="#">CKEditor</NavLink>
                        <ul>
                            <li><NavLink to="ckeditor-article.html">Article Editor </NavLink></li>
                            <li><NavLink to="ckeditor-inline.html">Inline Editor </NavLink></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <NavLink to="tables.html">
                    <i className="icon fa fa-table"></i>
                    <span>Tables</span>
                </NavLink>
                <ul>
                    <li>
                        <NavLink to="tables.html">Basic Tables </NavLink>
                    </li>
                    <li>
                        <NavLink to="data-table.html">Data Table </NavLink>
                    </li>
                    <li>
                        <NavLink to="responsive-table.html">Responsive Table </NavLink>
                    </li>
                </ul>
            </li>
            <li>
                <NavLink to="avatar.html">
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
                <NavLink to="charts.html">
                    <i className="icon ti-pie-chart"></i>
                    <span>Charts</span>
                </NavLink>
                <ul>
                    <li><NavLink to="chart-apex.html">Apex</NavLink></li>
                    <li><NavLink to="chartjs.html">Chartjs</NavLink></li>
                    <li><NavLink to="chart-justgage.html">Justgage</NavLink></li>
                    <li><NavLink to="chart-morsis.html">Morsis</NavLink></li>
                    <li><NavLink to="chart-peity.html">Peity</NavLink></li>
                </ul>
            </li>
            <li>
                <NavLink to="#">
                    <i className="icon ti-map"></i>
                    <span>Maps</span>
                </NavLink>
                <ul>
                    <li><NavLink to="google-map.html">Google Map</NavLink></li>
                    <li><NavLink to="vector-map.html">Vector Map</NavLink></li>
                </ul>
            </li>
            <li className="side-menu-divider m-t-10">User Pages</li>
            <li><NavLink to="#"><i className="icon ti-face-smile"></i> <span>Authentication</span> </NavLink>
                <ul>
                    <li><NavLink to="login.html">Login </NavLink></li>
                    <li><NavLink to="register.html">Register </NavLink></li>
                    <li><NavLink to="recover-password.html">Recovery Password </NavLink></li>
                    <li><NavLink to="lock-screen.html">Lock Screen </NavLink></li>
                </ul>
            </li>
            <li>
                <NavLink to="#">
                    <i className="icon ti-files"></i>
                    <span>Pages</span>
                </NavLink>
                <ul>
                    <li><NavLink to="profile.html">Profile </NavLink></li>
                    <li><NavLink to="timeline.html">Timeline </NavLink></li>
                    <li><NavLink to="invoice.html">Invoice </NavLink></li>
                    <li><NavLink to="pricing-table.html">Pricing Tables </NavLink></li>
                    <li><NavLink to="search-result.html">Search Result </NavLink></li>
                    <li>
                        <NavLink to="#">Email Templates</NavLink>
                        <ul>
                            <li><NavLink to="email-template-basic.html">Basic</NavLink></li>
                            <li><NavLink to="email-template-alert.html">Alert</NavLink></li>
                            <li><NavLink to="email-template-billing.html">Billing</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="#">Error Pages </NavLink>
                        <ul>
                            <li><NavLink to="404.html">404 </NavLink></li>
                            <li><NavLink to="404-alternative.html">404 Alternative </NavLink></li>
                            <li><NavLink to="mean-at-work.html">Mean at Work </NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="blank-page.html">Starter Page</NavLink></li>
                </ul>
            </li>
            <li>
                <NavLink to="#">
                    <i className="icon ti-menu"></i>
                    <span>Menu Level</span>
                </NavLink>
                <ul>
                    <li><NavLink to="#">Menu Level </NavLink>
                        <ul>
                            <li><NavLink to="#">Menu Level </NavLink></li>
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
                            <img src="http://borderless.laborasyon.com/assets/media/image/avatar.jpg" className="rounded-circle" alt=""/>
                        </figure>
                    </NavLink>
                </li>
                <li className="list-inline-item">
                    <NavLink to="#">
                        <figure className="avatar avatar-state-success avatar-xs">
                            <span className="avatar-title bg-primary rounded-circle">E</span>
                        </figure>
                    </NavLink>
                </li>
                <li className="list-inline-item">
                    <NavLink to="#">
                        <figure className="avatar avatar-state-success avatar-xs">
                            <span className="avatar-title bg-danger rounded-circle">SC</span>
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
                            <span className="avatar-title bg-dark font-size-14 rounded-circle">+5</span>
                        </figure>
                    </NavLink>
                </li>
            </ul>
            <h6 className="text-uppercase font-size-11 m-b-10 d-flex justify-content-between">Storage <span
                    className="text-muted">%85</span></h6>
            <div className="progress" style={{height: "5px"}}>
                <div className="progress-bar bg-danger-gradient" role="progressbar" style={{width: "85%", ariaValuenow:"25",
                     ariaValuemin:"0", ariaValuemax:"100"}}></div>
            </div>
        </div>
        </div>
    </div>
    

    );
}
