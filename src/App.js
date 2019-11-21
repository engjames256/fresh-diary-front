import React, { Component } from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router";
import Login from "./containers/auth/Login";
import ForgotPassword from "./containers/forgotPassword/ForgotPassword"
import Register from "./containers/register/Register";
import Products from "./containers/products/Products";
import Customers from "./containers/customers/Customers";
import TopNav from "./containers/commons/TopNav";
import SideBar from "./components/commons/SideBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <SideBar/>
          <TopNav />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/forgotpassword" exact component={ForgotPassword} />
            <Route path="/products" exact component={Products} />
            <Route path="/customers" exact component={Customers} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
