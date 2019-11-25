import React from "react";
import { NavLink } from "react-router-dom";

export default function Draw({
  handleInputChange,
  handleSubmit,
  state: {
    firstName,
    lastName,
    phoneNumber,
    receiptNumber,
    location,
    outlet,
    errors,
    isLoading,
    success,
    deactivateButton,
    product
  }
}) {
  return (
    <div>
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Fill in your details to enter the draw for {product.productName}
            </h5>
            <NavLink
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              to="/"
            >
              <span aria-hidden="true">&times;</span>
            </NavLink>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-10 offset-1">
                <div>
                  <img
                    src={product.productAWSLink}
                    alt="test"
                    id="item-image"
                  />
                </div>
              </div>
            </div>
            <form>
              <div className="row">
                <div className="col-md-6 form-group mb-4">
                  <input
                    type="text"
                    className={
                      errors.firstName
                        ? "form-control form-control-lg error"
                        : "form-control form-control-lg"
                    }
                    autofocus
                    placeholder="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={handleInputChange}
                  />
                  {errors.firstName && (
                    <span className="text-danger">{errors.firstName}</span>
                  )}
                </div>
                <div className="col-md-6 form-group mb-4">
                  <input
                    type="text"
                    className={
                      errors.lastName
                        ? "form-control form-control-lg error"
                        : "form-control form-control-lg"
                    }
                    placeholder="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={handleInputChange}
                  />
                  {errors.lastName && (
                    <span className="text-danger">{errors.lastName}</span>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group mb-4">
                  <input
                    type="text"
                    className={
                      errors.outlet
                        ? "form-control form-control-lg error"
                        : "form-control form-control-lg"
                    }
                    autofocus
                    placeholder="Outlet"
                    name="outlet"
                    value={outlet}
                    onChange={handleInputChange}
                  />
                  {errors.outlet && (
                    <span className="text-danger">{errors.outlet}</span>
                  )}
                </div>
                <div className="col-md-6 form-group mb-4">
                  <input
                    type="text"
                    className={
                      errors.location
                        ? "form-control form-control-lg error"
                        : "form-control form-control-lg"
                    }
                    placeholder="Location"
                    name="location"
                    value={location}
                    onChange={handleInputChange}
                  />
                  {errors.location && (
                    <span className="text-danger">{errors.location}</span>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      className={
                        errors.phoneNumber
                          ? "form-control form-control-lg error"
                          : "form-control form-control-lg"
                      }
                      placeholder="Phone Number"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={handleInputChange}
                    />
                    {errors.phoneNumber && (
                      <span className="text-danger">{errors.phoneNumber}</span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      className={
                        errors.receiptNumber
                          ? "form-control form-control-lg error"
                          : "form-control form-control-lg"
                      }
                      placeholder="Reciept Number"
                      name="receiptNumber"
                      value={receiptNumber}
                      onChange={handleInputChange}
                    />
                    {errors.receiptNumber && (
                      <span className="text-danger">
                        {errors.receiptNumber}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {success && (
                <span className="text-success h5 text-center">
                  You Have Successfully Entered Draw
                </span>
              )}
              <button
                className={
                  deactivateButton
                    ? "btn btn-primary btn-lg btn-block btn-uppercase mb-4 disabled"
                    : "btn btn-primary btn-lg btn-block btn-uppercase mb-4"
                }
                onClick={handleSubmit}
              >
                {isLoading ? (
                  <div>
                    <span className="spinner-border spinner-border-sm" />
                    &nbsp; Processing...
                  </div>
                ) : (
                  <span>Enter Draw</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
