import React, { Component, Fragment } from "react";
import LoginPage from "../../components/auth/Login";
import history from "../configs/history";

class Login extends Component {
  
  handleSubmit = e => {
    e.preventDefault();
    history.push("/home");
  };
  render() {
    return (
      <Fragment>
        <LoginPage handleSubmit={this.handleSubmit} />
      </Fragment>
    );
  }
}
export default Login;
