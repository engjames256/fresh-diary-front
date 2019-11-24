import React from "react";

export default function QRCode({ state: { product } }) {
  return (
    <div>
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Scan QR Code for {product.productName}
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
            <div class="row">
              <div class="col-10 offset-1">
                <div>
                  {console.log(product.productQRLink)}
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
