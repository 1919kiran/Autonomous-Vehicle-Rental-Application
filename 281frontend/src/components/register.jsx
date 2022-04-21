import React from "react";
import auth from "../services/authService";
import Joi from "joi-browser";
import Form from "./common/form";
import { Redirect } from "react-router";
import { register } from "../services/userService";
import companyLogo from './car_sports.png';

class Register extends Form {
  state = {
    data: { user_id: "", password: "", first_name: "", last_name: "", email: "" , dob: "", phone: "", user_type: "", user_location: ""},
    errors: {},
  };

  schema = {
    user_id: Joi.string().required().min(5).max(15).label("UserID"),
    password: Joi.string().required().min(8).max(20).label("Password"),
    first_name: Joi.string().required().min(5).max(15).label("First Name"),
    last_name: Joi.string().required().min(5).max(15).label("Last Name"),
    email: Joi.string().required().min(5).max(15).label("Email"),
    dob: Joi.string().required().min(5).max(15).label("DOB"),
    phone: Joi.string().required().min(5).max(10).label("Phone"),
    user_type: Joi.string().required().min(5).max(10).label("User Type"),
    user_location: Joi.string().required().min(5).max(10).label("Address"),

  };

  doSubmit = async () => {
    try {
      const response = await register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = this.state.errors;
        errors.user_id = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const user = auth.getCurrentUser();

    if (!user) {
      return (
        <div className = "row">
        <div className="col-md-6 col-10 my-5">

        <div className="card mb-4 box-shadow">  
              
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Register</h4>
          </div>
          <div className="card-body" style={{backgroundColor: "#FAE395"}}>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("user_id", "UserID")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("first_name", "First Name")}
            {this.renderInput("last_name", "Last Name")}
            {this.renderInput("email", "Email")}
            {this.renderInput("dob", "DOB")}
            {this.renderInput("phone", "Phone")}
            {this.renderInput("user_type", "User Type")}
            {this.renderInput("user_location", "Address")}
    
            
            {this.renderButton("Register")}
          </form>
          <br></br>
              Already have an acoount? Please login here <a href="/login">Login</a>
        </div>
        </div>
 
        </div>

        <div >  
        <img src={companyLogo} />   
        </div>

        </div>

      );
    } else {
      if (user && user.isadmin) {
        return (
          <Redirect
            to={{
              pathname: "/dashboard",
            }}
          ></Redirect>
        );
      } else {
        return (
          <Redirect
            to={{
              pathname: "/mySchedule",
            }}
          ></Redirect>
        );
      }
    }
  }
}

export default Register;
