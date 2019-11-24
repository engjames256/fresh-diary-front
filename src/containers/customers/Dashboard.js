import React, { Component, Fragment } from "react";
import DashboardComponent from "../../components/customers/Dashboard";
import { baseURL } from "../configs/utils";
import { withRouter } from "react-router-dom";
import history from "../configs/history";
import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC65dPZASXiPJarWpU24mE0BH6QwurXQEY",
  authDomain: "freshdiary-222e4.firebaseapp.com",
  databaseURL: "https://freshdiary-222e4.firebaseio.com",
  projectId: "freshdiary-222e4",
  storageBucket: "freshdiary-222e4.appspot.com",
  messagingSenderId: "1018646959578",
  appId: "1:1018646959578:web:44aeea22d8a530ecabdce3",
  measurementId: "G-ZSQXTH2T2Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Dashboard extends Component {
  state = {
    username: "",
    fullName: "",
    password: "",
    reTypePassword: "",
    systemUsers: [],
    customers: [],
    products: [],
    file: "",
    imagePreviewUrl: "",
    url: "",
    progress: 0,
    productName: "",
    productDescription: "",
    errors: {},
    isLoading: false,
    success: false
  };

  componentWillMount = () => {
    this.retrieveAllUsers();
    this.retrieveAllCustomers();
    this.retrieveAllProducts();
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({ success: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    const url = `${baseURL}user`;
    const { username, password, fullName, reTypePassword } = this.state;
    const data = {
      username: username,
      password: password,
      fullname: fullName
    };
    if (!username) {
      const error = { username: "Username is required" };
      this.setState({ errors: error });
    } else if (!fullName) {
      const error = { fullName: "Full name is required" };
      this.setState({ errors: error });
    } else if (password !== reTypePassword) {
      const error = { reType: "Password mismatch" };
      this.setState({ errors: error });
    } else {
      this.setState({ errors: {}, isLoading: true });
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
            reTypePassword: "",
            isLoading: false,
            success: true
          });
          this.retrieveAllUsers();
        });
    }
  };

  handleImageChange = event => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
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
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ customers: data });
      });
  };

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

  handleSubmitArt = async event => {
    event.preventDefault();
    let self = this;

    const { productName, productDescription } = this.state;

    if (!productName) {
      const error = { productName: "Product name is required" };
      this.setState({ errors: error });
    } else {
      this.setState({ errors: {}, isLoading: true });
      // Upload image to firebase
      const { file } = this.state;
      const uploadTask = firebase
        .storage()
        .ref(`images/${file.name}`)
        .put(file);
      await uploadTask.on(
        "state_changed",
        snapshot => {
          // progress function ...
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          self.setState({ progress });
        },
        error => {
          // Error function ...
          console.log(error);
        },
        () => {
          // complete function ...
          firebase
            .storage()
            .ref("images")
            .child(file.name)
            .getDownloadURL()
            .then(urlFirebase => {
              const urlAPI = `${baseURL}fresh/v1/add/products`;
              const data = {
                productName,
                productDescription,
                productAWSLink: urlFirebase
              };
              fetch(urlAPI, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(data)
              })
                .then(response => response.json())
                .then(data => {
                  self.setState({
                    productName: "",
                    imagePreviewUrl: "",
                    isLoading: false,
                    success: true
                  });
                  self.retrieveAllProducts();
                });
            });
        }
      );
    }
  };

  render() {
    const { location } = this.props;
    if (location.pathname && !localStorage.getItem("token")) {
      return history.push("/login");
    }
    return (
      <Fragment>
        <DashboardComponent
          handleInputChange={this.handleInputChange}
          state={this.state}
          handleSubmit={this.handleSubmit}
          handleImageChange={this.handleImageChange}
          handleSubmitArt={this.handleSubmitArt}
        />
      </Fragment>
    );
  }
}
export default withRouter(Dashboard);
