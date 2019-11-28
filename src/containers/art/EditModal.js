import React, { Component } from "react";
import EditModalComponent from "../../components/art/EditModal";

export default class EditModal extends Component {
  state = { visible: false, winner: {} };

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
    const { productName, productLink, retrievWinner, winner } = this.props;
    return (
      <div>
        <EditModalComponent
          productName={productName}
          productLink={productLink}
          showModal={this.showModal}
          hideModal={this.hideModal}
          state={this.state}
          retrievWinner={retrievWinner}
          winner={winner}
        />
      </div>
    );
  }
}
