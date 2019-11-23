import React from "react";
import { NavLink } from "react-router-dom";

export default function art({ state: { products } }) {
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
                {products &&
                  products.map(product => (
                    <tr>
                      <td>{product.productName}</td>
                      <td>{product.productAWSLink}</td>
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
