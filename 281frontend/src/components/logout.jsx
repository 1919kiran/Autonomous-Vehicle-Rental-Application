import React, { Component } from "react";
import auth from "../services/authService";
import { Navigate } from "react-router-dom";

class Logout extends Component {
  componentDidMount() {
    const user = auth.getCurrentUser();
//logout and redirect to home page
    if (user) {
      auth.logout();
      window.location = "/";
    } else {
      <Navigate
        to={{
          pathname: "/",
        }}
      ></Navigate>;
    }
  }

  render() {
    return null;
  }
}

export default Logout;
