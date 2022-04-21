import React, { Component } from "react";
import auth from "../services/authService";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  componentDidMount() {
    const user = auth.getCurrentUser();
//logout and redirect to home page
    if (user) {
      auth.logout();
      window.location = "/";
    } else {
      <Redirect
        to={{
          pathname: "/",
        }}
      ></Redirect>;
    }
  }

  render() {
    return null;
  }
}

export default Logout;
