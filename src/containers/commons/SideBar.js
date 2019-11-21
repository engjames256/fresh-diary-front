import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import SideBarComponent from "../../components/commons/SideBar";
import { isFramelessPage } from "../../containers/configs/utils";

class SideBar extends Component {
  render() {
    const { location } = this.props;
    if (isFramelessPage(location.pathname)) {
      return null;
    }
    return (
      <Fragment>
        <SideBarComponent />
      </Fragment>
    );
  }
}
export default withRouter(SideBar);
