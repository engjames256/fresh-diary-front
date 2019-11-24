import React, { Component } from "react";
import ProductItemsComponent from "../../components/products/ProductsItems";
import { baseURL } from "../configs/utils";
export default class ProductItems extends Component {
  state = {
    products: []
  };

  componentWillMount() {
    this.retrieveAllProducts();
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
  render() {
    return (
      <div className="mt-4 mx-4">
        <ProductItemsComponent products={this.state.products} />
      </div>
    );
  }
}
