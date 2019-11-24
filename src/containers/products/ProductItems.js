import React, { Component } from "react";
import ProductItemsComponent from "../../components/products/ProductsItems";
import { baseURL } from "../configs/utils";
export default class ProductItems extends Component {
  state = {
    products: [],
    imageByte: null
  };

  componentWillMount() {
    this.retrieveAllProducts();
    this.retrieveQRCode();
  }

  retrieveAllProducts = () => {
    const url = `${baseURL}fresh/v1/products`;
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ products: data });
      });
  };

  retrieveQRCode = () => {
    const url = `${baseURL}view`;
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ imageByte: data });
      });
  };
  render() {
    return (
      <div className="mt-4 mx-4">
        <ProductItemsComponent products={this.state.products} />
      </div>
    );
  }
}
