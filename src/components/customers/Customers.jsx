import React from "react";
import { NavLink } from "react-router-dom";

export default function customers({ state: { customers } }) {
  return (
    <div className="main-content">
      <div className="container">
        <div className="page-header">
          <h3>Customers</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink to="#">Dashboard</NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Customers
              </li>
            </ol>
          </nav>
        </div>

        <div className="card">
          <div className="card-body">
            <table id="example1" className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Recipt Number</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone Number</th>
                  <th>Outlet</th>
                  <th>Location</th>
                  <th>Product</th>
                </tr>
              </thead>
              <tbody>
                {customers &&
                  customers.map(user => (
                    <tr>
                      <td>{user.receiptNumber}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.phoneNumber}</td>
                      <td>{user.outlet}</td>
                      <td>{user.location}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
