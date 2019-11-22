import React from "react";
import { NavLink } from "react-router-dom";

export default function viewUsers() {
  return (
    <div className="main-content">
      {/* Add Users Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Fill in user details
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6 form-group mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      autofocus
                      placeholder="Username"
                    />
                  </div>
                  <div className="col-md-6 form-group mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-4">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-4">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Retype Password"
                      />
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary btn-lg btn-block btn-uppercase mb-4">
                  Create User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End of Modal */}

      <div className="container">
        <div className="page-header">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb row">
              <div className="col-md-10">
                <li className="breadcrumb-item active" aria-current="page">
                  <h3>Users</h3>
                </li>
              </div>

              <div className="col-md-2">
                <li className="" aria-current="page">
                  <button
                    type="button"
                    class="btn btn-primary float-right"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    data-whatever="@fat"
                  >
                    Add User
                  </button>
                </li>
              </div>
            </ol>
          </nav>
        </div>

        <div className="card">
          <div className="card-body">
            <table id="example1" className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Full Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                </tr>
                <tr>
                  <td>Timothy Mooney</td>
                  <td>Office Manager</td>
                </tr>
                <tr>
                  <td>Jackson Bradshaw</td>
                  <td>Director</td>
                </tr>
                <tr>
                  <td>Olivia Liang</td>
                  <td>Support Engineer</td>
                </tr>
                <tr>
                  <td>Bruno Nash</td>
                  <td>Software Engineer</td>
                </tr>
                <tr>
                  <td>Sakura Yamamoto</td>
                  <td>Support Engineer</td>
                </tr>
                <tr>
                  <td>Thor Walton</td>
                  <td>Developer</td>
                </tr>
                <tr>
                  <td>Finn Camacho</td>
                  <td>Support Engineer</td>
                </tr>

                <tr>
                  <td>Jonas Alexander</td>
                  <td>Developer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
