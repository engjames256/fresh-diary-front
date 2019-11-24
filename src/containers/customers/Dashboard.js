import React, { Component, Fragment } from "react";
import DashboardComponent from "../../components/customers/Dashboard";
import { baseURL } from "../configs/utils";
import { withRouter } from "react-router-dom";
import history from "../configs/history";
// import { storage } from "../configs/index";
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
  handleSubmitArt = event => {
    event.preventDefault();

    // Upload image to firebase
    // const { file } = this.state;
    // const uploadTask = storage.ref(`images/${file.name}`).put(file);
    // uploadTask.on(
    //   "state_changed",
    //   snapshot => {
    //     // progress function ...
    //     const progress = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //     this.setState({ progress });
    //   },
    //   error => {
    //     // Error function ...
    //     console.log(error);
    //   },
    //   () => {
    //     // complete function ...
    //     storage
    //       .ref("images")
    //       .child(file.name)
    //       .getDownloadURL()
    //       .then(url => {
    //         this.setState({ url });
    //       });
    //   }
    // );

    const url = `${baseURL}fresh/v1/add/products`;
    const { productName, productDescription } = this.state;
    const data = {
      productName,
      productDescription
    };
    if (!productName) {
      const error = { productName: "Product name is required" };
      this.setState({ errors: error });
    } else {
      this.setState({ errors: {}, isLoading: true });
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          this.setState({
            productName: "",
            imagePreviewUrl: "",
            isLoading: false,
            success: true
          });
          this.retrieveAllProducts();
        });
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
