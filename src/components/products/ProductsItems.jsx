import React from "react";
import testImage from "../../assets/images/test-image.png";
import QRCode from "../../assets/images/MyQRCode.png";
import { NavLink } from "react-router-dom";

export default function ProductsItems({ products }) {
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
      {products &&
        products.length &&
        products.map(
          ({
            id,
            productName,
            productDescription,
            productAWSLink,
            productQRLink
          }) => (
            <div class="col-md-3" key={id}>
              <div class="card">
                <div class="card-header">{productName}</div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-10 offset-1">
                      <div>
                        <img src={testImage} alt="test" id="item-image" />
                      </div>
                    </div>
                  </div>
                  <span>{productDescription}</span>
                  <hr />
                  <div class="row">
                    <div class="col-6 mt-1">
                      <NavLink
                        to={`/draw/${id}`}
                        className="text-white btn btn-primary"
                      >
                        Enter The Draw
                      </NavLink>
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
          )
        )}
    </div>
  );
}
