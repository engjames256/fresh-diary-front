import React, { Component } from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router";
import Login from "./containers/auth/Login";
import Products from "./containers/products/ProductItems";
import TopNav from "./containers/commons/TopNav";
import Dashboard from "./containers/customers/Dashboard";
import Modal from "./components/commons/Modal";
import history from "./containers/configs/history";
import Draw from "./containers/customers/Draw";
class App extends Component {
  handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };
  render() {
    return (
      <div className="App">
        <Router>
          <TopNav handleLogout={this.handleLogout} />
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Products} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/draw/:id" exact component={Draw} />
            <Route path="/modal" exact component={Modal} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
