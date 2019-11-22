import React, { Component } from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router";
import Login from "./containers/auth/Login";
import Products from "./containers/products/ProductItems";
import TopNav from "./containers/commons/TopNav";
import Dashboard from "./containers/customers/Dashboard";
import Modal from "./components/commons/Modal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <TopNav />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/products" exact component={Products} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/modal" exact component={Modal} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
