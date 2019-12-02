import React from "react";
import { NavLink } from "react-router-dom";
import ConfirmationModal from "../commons/ConfirmationModal";
import SpinnWinner from "../../containers/art/EditModal";
export default function art({
  handleImageChange,
  state: {
    imagePreviewUrl,
    products,
    success,
    errors,
    isLoading,
    productName,
    productDescription,
    failureMessage,
    winner
  },
  handleSubmitArt,
  handleInputChange,
  deleteArt,
  retrievWinner
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

              <form>
                <div className="row">
                  <div className="col-md-6 form-group mb-4">
                    <input
                      type="text"
                      className={
                        errors.productName
                          ? "form-control form-control-lg error"
                          : "form-control form-control-lg"
                      }
                      autofocus
                      placeholder="Product Name"
                      name="productName"
                      value={productName}
                      onChange={handleInputChange}
                    />
                    {errors.productName && (
                      <span className="text-danger">{errors.productName}</span>
                    )}
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-4">
                      <input
                        type="file"
                        className="form-control"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-12 form-group mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Description"
                      name="productDescription"
                      value={productDescription}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    {success && (
                      <span className="text-success h4 text-center">
                        Product Successfully Saved
                      </span>
                    )}
                    {failureMessage !== "" && (
                      <span className="text-danger h4 text-center">
                        {failureMessage}
                      </span>
                    )}
                    <button
                      className="btn btn-primary btn-block btn-uppercase mb-4"
                      onClick={handleSubmitArt}
                    >
                      {isLoading ? (
                        <div>
                          <span className="spinner-border spinner-border-sm" />
                          &nbsp; Saving Product...
                        </div>
                      ) : (
                        <span>Save Product</span>
                      )}
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
                  <th className="w-30">Art Name</th>
                  <th className="w-50">Note</th>
                  <th className="w-100 row text-center">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">Actions</div>
                    <div className="col-md-4"></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map(product => (
                    <tr key={product.id}>
                      <td className="product-name">{product.productName}</td>
                      <td>{product.productDescription}</td>
                      <td>
                        <div className="col-md-12 action-column row">
                          <div className="col-md-4">
                            <SpinnWinner
                              productName={product.productName}
                              productLink={product.productAWSLink}
                              retrievWinner={() => retrievWinner(product.id)}
                              winner={winner}
                            />
                          </div>
                          <div className="col-md-4">
                            <button className="btn btn-lg btn-outline-primary custom-button-confirm-edit float-right">
                              Edit
                            </button>
                          </div>
                          <div className="col-md-4">
                            <ConfirmationModal
                              deleteArt={() => deleteArt(product.id)}
                            />
                          </div>
                        </div>
                      </td>
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
