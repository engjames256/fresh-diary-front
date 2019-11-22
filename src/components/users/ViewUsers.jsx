import React from "react";
import { NavLink } from "react-router-dom";

export default function viewUsers({
  handleInputChange,
  state: { username, fullName, password, reTypePassword, systemUsers },
  handleSubmit
}) {
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
                      name="username"
                      value={username}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6 form-group mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Full Name"
                      name="fullName"
                      value={fullName}
                      onChange={handleInputChange}
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
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-4">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Retype Password"
                        name="reTypePassword"
                        value={reTypePassword}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block btn-uppercase mb-4"
                  onClick={handleSubmit}
                >
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
                {systemUsers &&
                  systemUsers.map(user => (
                    <tr>
                      <td>{user.username}</td>
                      <td>{user.fullname}</td>
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
