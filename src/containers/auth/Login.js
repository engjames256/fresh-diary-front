import React, { Component, Fragment } from "react";
import LoginPage from "../../components/auth/Login";
import { baseURL } from "../configs/utils";
import history from "../configs/history";
class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const url = `${baseURL}authenticate`;
    const { username, password } = this.state;
    const data = { username, password };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          history.push("/dashboard");
        }
      });
  };
  render() {
    return (
      <Fragment>
        <LoginPage
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          state={this.state}
        />
      </Fragment>
    );
  }
}
export default Login;
