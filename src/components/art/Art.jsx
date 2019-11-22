import React from "react";
import { NavLink } from "react-router-dom";

export default function art() {
  return (
    <div className="main-content">
      <div className="container">
        <div className="page-header">
          <h3>Arts</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink to="#">Dashboard</NavLink>
              </li>
              <li className="breadcrumb-item">
                <NavLink to="#">Arts</NavLink>
              </li>
            </ol>
          </nav>
        </div>

        <div className="card">
          <div className="card-body">
            <table id="example1" className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Art Name</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                </tr>
                <tr>
                  <td>Garrett Winters</td>
                  <td>Accountant</td>
                </tr>
                <tr>
                  <td>Ashton Cox</td>
                  <td>Junior Technical Author</td>
                </tr>
                <tr>
                  <td>Cedric Kelly</td>
                  <td>Senior Javascript Developer</td>
                </tr>
                <tr>
                  <td>Airi Satou</td>
                  <td>Accountant</td>
                </tr>
                <tr>
                  <td>Brielle Williamson</td>
                  <td>Integration Specialist</td>
                </tr>
                <tr>
                  <td>Herrod Chandler</td>
                  <td>Sales Assistant</td>
                </tr>
                <tr>
                  <td>Rhona Davidson</td>
                  <td>Integration Specialist</td>
                </tr>
                <tr>
                  <td>Colleen Hurst</td>
                  <td>Javascript Developer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
