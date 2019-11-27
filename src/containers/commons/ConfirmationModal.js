import React, { Component } from "react";
import ConfirmationModalComponent from "../../components/commons/ConfirmationModal";

export default class ConfirmationModal extends Component {
  state = {
    showDialog: false
  };
  open = () => {
    this.setState({ showDialog: true });
  };
  close = () => {
    this.setState({ showDialog: false });
  };
  render() {
    return (
      <div>
        <ConfirmationModalComponent
          open={this.open}
          close={this.close}
          showDialog={this.state.showDialog}
        />
      </div>
    );
  }
}
