import React from "react";
import auth from "../services/authService";
import Joi from "joi-browser";
import Form from "./common/form";
import { Navigate } from "react-router";
import companyLogo from './car_sports.png';

class LoginForm extends Form {
  state = {
    data: { user_id: "", password: "" },
    errors: {},
  };

  schema = {
    user_id: Joi.string().required().label("UserID"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { user_id, password } = this.state.data;
      await auth.login(user_id, password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.user_id = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const user = auth.getCurrentUser();

    if (!user) {
      console.log("DID NOT GET USER");
      return (
        <div className = "row">
        <div className="col-md-6 col-10 my-5">
        <div className="card mb-4 box-shadow">          
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Login</h4>
          </div>
          <div className="card-body" style={{backgroundColor: "#FAE395"}}>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("user_id", "UserID")}
                {this.renderInput("password", "Password", "password")}
                {this.renderButton("Login")}
              </form>
              <br></br>
              Not a user already? Click here <a href="/register">Register</a>
          </div>
          </div>
        </div>
        <div style={{width: "8px"},{height: "8px"}}>  
        <img src={companyLogo} />   
        </div>

        </div>
      );
    } else {
      console.log("GOT USER");
      if (user && user.isadmin) {
        return (
          <Navigate
            to={{
              pathname: "/dashboard",
            }}
          ></Navigate>
        );
      } else {
        return (
          <Navigate
            to={{
              pathname: "/mySchedule",
            }}
          ></Navigate>
        );
      }
    }
  }
}

export default LoginForm;
