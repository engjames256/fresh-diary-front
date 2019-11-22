import React from "react";
import testImage from "../../assets/images/test-image.png";
import QRCode from "../../assets/images/MyQRCode.png";

export default function ProductsItems() {
  return (
    <div class="row row-sm">
      {/* Small Modal For QR Code */}
      <div
        class="modal fade bd-example-modal-sm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title">Scan the QR Code Below</h6>
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
              <img src={QRCode} alt="QRCode" id="item-image" />
            </div>
          </div>
        </div>
      </div>
      {/* Enter The Draw Modal */}
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
                Fill in your details to enter the draw
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
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary btn-lg btn-block btn-uppercase mb-4">
                  Enter Draw
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End of Modal */}

      <div class="col-md-3">
        <div class="card">
          <div class="card-header">Item Name</div>
          <div class="card-body">
            <div class="row">
              <div class="col-10 offset-1">
                <div>
                  <img src={testImage} alt="test" id="item-image" />
                </div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-6"></div>
              <div class="col-6"></div>
              <div class="col-6 mt-1">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@fat"
                >
                  Enter The Draw
                </button>
              </div>
              <div class="col-6 mt-1">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-toggle="modal"
                  data-target=".bd-example-modal-sm"
                >
                  Scan QR Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-header">Item Name</div>
          <div class="card-body">
            <div class="row">
              <div class="col-10 offset-1">
                <div>
                  <img src={testImage} alt="test" id="item-image" />
                </div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-6"></div>
              <div class="col-6"></div>
              <div class="col-6 mt-1">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@fat"
                >
                  Enter The Draw
                </button>
              </div>
              <div class="col-6 mt-1">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-toggle="modal"
                  data-target=".bd-example-modal-sm"
                >
                  Scan QR Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-header">Item Name</div>
          <div class="card-body">
            <div class="row">
              <div class="col-10 offset-1">
                <div>
                  <img src={testImage} alt="test" id="item-image" />
                </div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-6"></div>
              <div class="col-6"></div>
              <div class="col-6 mt-1">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@fat"
                >
                  Enter The Draw
                </button>
              </div>
              <div class="col-6 mt-1">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-toggle="modal"
                  data-target=".bd-example-modal-sm"
                >
                  Scan QR Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card">
          <div class="card-header">Item Name</div>
          <div class="card-body">
            <div class="row">
              <div class="col-10 offset-1">
                <div>
                  <img src={testImage} alt="test" id="item-image" />
                </div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-6"></div>
              <div class="col-6"></div>
              <div class="col-6 mt-1">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@fat"
                >
                  Enter The Draw
                </button>
              </div>
              <div class="col-6 mt-1">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-toggle="modal"
                  data-target=".bd-example-modal-sm"
                >
                  Scan QR Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card">
          <div class="card-header">Item Name</div>
          <div class="card-body">
            <div class="row">
              <div class="col-10 offset-1">
                <div>
                  <img src={testImage} alt="test" id="item-image" />
                </div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-6"></div>
              <div class="col-6"></div>
              <div class="col-6 mt-1">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@fat"
                >
                  Enter The Draw
                </button>
              </div>
              <div class="col-6 mt-1">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-toggle="modal"
                  data-target=".bd-example-modal-sm"
                >
                  Scan QR Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card">
          <div class="card-header">Item Name</div>
          <div class="card-body">
            <div class="row">
              <div class="col-10 offset-1">
                <div>
                  <img src={testImage} alt="test" id="item-image" />
                </div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-6"></div>
              <div class="col-6"></div>
              <div class="col-6 mt-1">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@fat"
                >
                  Enter The Draw
                </button>
              </div>
              <div class="col-6 mt-1">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-toggle="modal"
                  data-target=".bd-example-modal-sm"
                >
                  Scan QR Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card">
          <div class="card-header">Item Name</div>
          <div class="card-body">
            <div class="row">
              <div class="col-10 offset-1">
                <div>
                  <img src={testImage} alt="test" id="item-image" />
                </div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-6"></div>
              <div class="col-6"></div>
              <div class="col-6 mt-1">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@fat"
                >
                  Enter The Draw
                </button>
              </div>
              <div class="col-6 mt-1">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-toggle="modal"
                  data-target=".bd-example-modal-sm"
                >
                  Scan QR Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card">
          <div class="card-header">Item Name</div>
          <div class="card-body">
            <div class="row">
              <div class="col-10 offset-1">
                <div>
                  <img src={testImage} alt="test" id="item-image" />
                </div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-6"></div>
              <div class="col-6"></div>
              <div class="col-6 mt-1">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@fat"
                >
                  Enter The Draw
                </button>
              </div>
              <div class="col-6 mt-1">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-toggle="modal"
                  data-target=".bd-example-modal-sm"
                >
                  Scan QR Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
