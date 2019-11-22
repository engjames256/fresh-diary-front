import React from "react";
import "../../index.css";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div class="side-menu">
      <div class="side-menu-body">
        <ul>
          <li class="side-menu-divider m-t-0"></li>
          <li>
            <NavLink to="#" className="mb-2">
              <i class="icon fa fa-globe"></i>
              <span>Products</span>
            </NavLink>
            <ul>
              <li className="mb-2">
                <NavLink to="dashboard-one.html">Add Products</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/arts">View Products</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="#" className="mb-2">
              <i class="icon fa fa-rocket"></i>
              <span>Customers</span>
            </NavLink>
            <ul>
              <li className="mb-2">
                <NavLink to="chat.html">Enter Draw</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/customers">View Customers</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="#" className="mb-2">
              <i class="icon fa fa-rocket"></i>
              <span>System Users</span>
            </NavLink>
            <ul>
              <li className="mb-2">
                <NavLink to="chat.html">Add Users</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="calendar.html">View Users</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
