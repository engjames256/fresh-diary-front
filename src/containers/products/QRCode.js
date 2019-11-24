import React, { Component } from "react";
import QRCodeComponent from "../../components/products/QRCode";
import { baseURL } from "../configs/utils";

export default class QRCode extends Component {
  state = {
    product: {}
  };

  componentWillMount() {
    const {
      params: { id }
    } = this.props.match;
    this.retrieveProduct(id);
  }

  retrieveProduct = id => {
    const url = `${baseURL}fresh/v1/products/${id}`;
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ product: data });
      });
  };

  render() {
    return <QRCodeComponent state={this.state} />;
  }
}
