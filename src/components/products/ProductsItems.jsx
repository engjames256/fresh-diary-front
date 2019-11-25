import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductsItems({ products }) {
  return (
    <div class="row row-sm">
      {products && products.length ? (
        products.map(
          ({ id, productName, productDescription, productAWSLink }) => (
            <div class="col-md-3" key={id}>
              <div class="card">
                <div class="card-header">{productName}</div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-10 offset-1">
                      <div className="product-image">
                        <img src={productAWSLink} alt="test" id="item-image" />
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
                      <NavLink className="btn btn-secondary" to={`/code/${id}`}>
                        Scan QR Code
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )
      ) : (
        <span className="text-primary h4">
          No Products Available At This Time
        </span>
      )}
    </div>
  );
}
