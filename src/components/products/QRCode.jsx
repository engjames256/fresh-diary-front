import React from "react";
import { NavLink } from "react-router-dom";

export default function QRCode({ state: { product } }) {
  return (
    <div>
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Scan QR Code for {product.productName}
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
                  <img src={product.productQRLink} alt="test" id="item-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
