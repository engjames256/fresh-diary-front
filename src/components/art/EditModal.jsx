import React from "react";
import { Modal, Button } from "antd";
class EditModal extends React.Component {
  render() {
    const {
      productLink,
      productName,
      hideModal,
      showModal,
      state,
      retrievWinner,
      winner
    } = this.props;
    return (
      <div>
        <Button
          onClick={showModal}
          className="btn btn-outline-secondary custom-button-confirm-edit"
        >
          Spinn Winner
        </Button>
        <Modal
          title={`Spinn Winner for ${productName}`}
          visible={state.visible}
          onOk={hideModal}
          onCancel={hideModal}
          footer={null}
        >
          {winner.firstName && (
            <div className="winner-details ">
              <div className="winner-row">
                <p>
                  <strong>Name of Winner:</strong> {winner.firstName}{" "}
                  {winner.lastName}
                </p>
                <p>
                  <strong>Phone Number:</strong> {winner.phoneNumber}
                </p>
                <p>
                  <strong>Location:</strong> {winner.location}
                </p>
              </div>
              <div className="winner-row">
                <p>
                  <strong>Outlet:</strong> {winner.outlet}
                </p>
                <p>
                  <strong>Reciept Number:</strong> {winner.receiptNumber}
                </p>
              </div>
            </div>
          )}

          <div class="row">
            <div class="col-10 offset-1">
              <img src={productLink} alt="Product" id="item-image" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <button
                className="btn btn-lg btn-outline-primary"
                onClick={retrievWinner}
              >
                Spinn Now
              </button>
            </div>
            <div className="col-md-4"></div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default EditModal;
