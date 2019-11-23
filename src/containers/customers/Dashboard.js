import React, { Component, Fragment } from "react";
import DashboardComponent from "../../components/customers/Dashboard";
import { baseURL } from "../configs/utils";

export default class Dashboard extends Component {
  state = {
    username: "",
    fullName: "",
    password: "",
    reTypePassword: "",
    systemUsers: [],
    customers: []
  };

  componentWillMount = () => {
    this.retrieveAllUsers();
    this.retrieveAllCustomers();
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const url = `${baseURL}user`;
    const { username, password, fullName } = this.state;
    const data = {
      username: username,
      password: password,
      fullname: fullName
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
          username: "",
          password: "",
          fullName: "",
          reTypePassword: ""
        });
        this.retrieveAllUsers();
      });
  };

  retrieveAllUsers = () => {
    const url = `${baseURL}users`;
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ systemUsers: data });
      });
  };

  retrieveAllCustomers = () => {
    const url = `${baseURL}fresh/v1/customers`;
    const token = `${localStorage.getItem("token")}`;
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data, "some data from api");
        this.setState({ customers: data });
      });
  };

  render() {
    return (
      <Fragment>
        <DashboardComponent
          handleInputChange={this.handleInputChange}
          state={this.state}
          handleSubmit={this.handleSubmit}
        />
      </Fragment>
    );
  }
}
