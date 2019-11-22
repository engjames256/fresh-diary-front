import React, { Component } from "react";
import ProductItemsComponent from "../../components/products/ProductsItems";

export default class ProductItems extends Component {
  render() {
    return (
      <div className="mt-4 mx-4">
        <ProductItemsComponent />
      </div>
    );
  }
}
