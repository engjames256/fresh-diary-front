import React from "react";
import { NavLink } from "react-router-dom";
export default function art({
  handleImageChange,
  state: { imagePreviewUrl, products }
}) {
  return (
    <div className="main-content">
      {/* Enter The Product Details */}
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
                Fill in your details of the product
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
                    {imagePreviewUrl && (
                      <img
                        src={imagePreviewUrl}
                        alt="Product"
                        id="item-image"
                      />
                    )}
                  </div>
                </div>
              </div>
              <hr />
              <form>
                <div className="row">
                  <div className="col-md-6 form-group mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      autofocus
                      placeholder="Product Name"
                    />
                  </div>
                  <div className="col-md-6 form-group mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Description"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-4">
                      <input
                        type="file"
                        className="form-control"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-primary btn-block btn-uppercase mb-4">
                      Save Product
                    </button>
                  </div>
                </div>
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
                <li className="breadcrumb-item">
                  <NavLink to="#">
                    <h3>Arts</h3>
                  </NavLink>
                </li>
              </div>
              <div className="col-md-2 float-right">
                <li className="" aria-current="page">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    data-whatever="@fat"
                  >
                    Add Product
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
