import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import TopNavComponent from "../../components/commons/TopNav";
import { isFramelessPage } from "../../containers/configs/utils";

class TopNav extends Component {
  render() {
    const { location } = this.props;
    if (isFramelessPage(location.pathname)) {
      return null;
    }
    return (
      <Fragment>
        <TopNavComponent />
      </Fragment>
    );
  }
}
export default withRouter(TopNav);
