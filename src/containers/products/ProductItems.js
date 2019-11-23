import React, { Component } from "react";
import ProductItemsComponent from "../../components/products/ProductsItems";
import { baseURL } from "../configs/utils";
export default class ProductItems extends Component {
  state = {
    firstName: "",
    lastName: "",
    outlet: "",
    location: "",
    phoneNumber: "",
    recieptNumber: "",
    customers: []
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const url = `${baseURL}fresh/v1/add/customers`;
    const {
      firstName,
      lastName,
      outlet,
      location,
      phoneNumber,
      recieptNumber
    } = this.state;
    const data = {
      firstName,
      lastName,
      outlet,
      location,
      phoneNumber,
      recieptNumber
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          firstName: "",
          lastName: "",
          fullName: "",
          outlet: "",
          location: "",
          phoneNumber: "",
          recieptNumber: ""
        });
      });
  };

  render() {
    return (
      <div className="mt-4 mx-4">
        <ProductItemsComponent
          handleInputChange={this.handleInputChange}
          state={this.state}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
