import React, { Component } from "react";
import DrawComponent from "../../components/customers/Draw";
import { baseURL } from "../configs/utils";

export default class Draw extends Component {
  state = {
    firstName: "",
    lastName: "",
    outlet: "",
    location: "",
    phoneNumber: "",
    receiptNumber: "",
    errors: {},
    isLoading: false,
    success: false,
    deactivateButton: false
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      outlet,
      location,
      phoneNumber,
      receiptNumber
    } = this.state;
    const data = {
      firstName,
      lastName,
      outlet,
      location,
      phoneNumber,
      receiptNumber
    };
    const {
      params: { id }
    } = this.props.match;
    const url = `${baseURL}fresh/v1/product/${id}/add/customers`;
    if (!firstName) {
      const error = { firstName: "First name is required" };
      this.setState({ errors: error });
    } else if (!lastName) {
      const error = { lastName: "Last name is required" };
      this.setState({ errors: error });
    } else if (!outlet) {
      const error = { outlet: "Outlet is required" };
      this.setState({ errors: error });
    } else if (!location) {
      const error = { location: "Location is required" };
      this.setState({ errors: error });
    } else if (!phoneNumber) {
      const error = { phoneNumber: "Phone number is required" };
      this.setState({ errors: error });
    } else if (!receiptNumber) {
      const error = {
        receiptNumber: "Receipt number is required"
      };
      this.setState({ errors: error });
    } else {
      this.setState({ errors: {}, isLoading: true });
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          if (data.firstNam !== "") {
            this.setState({
              firstName: "",
              lastName: "",
              fullName: "",
              outlet: "",
              location: "",
              phoneNumber: "",
              receiptNumber: "",
              isLoading: false,
              success: true,
              deactivateButton: true
            });
          }
        });
    }
  };

  render() {
    return (
      <DrawComponent
        handleInputChange={this.handleInputChange}
        state={this.state}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
