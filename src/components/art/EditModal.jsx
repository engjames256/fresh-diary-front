import React from "react";
import { Modal, Button } from "antd";

class EditModal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  hideModal = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button
          onClick={this.showModal}
          className="btn btn-outline-secondary custom-button-confirm-edit"
        >
          Spinn Winner
        </Button>
        <Modal
          title="Spinn Winner for this product"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="Spinn Winner"
          cancelText="Cancel"
        >
          <p>Name of Winner ...</p>
          <p>Phone Number ...</p>
          <p>Address ...</p>
        </Modal>
      </div>
    );
  }
}
export default EditModal;
