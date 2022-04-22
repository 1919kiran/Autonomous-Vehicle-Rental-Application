import React, { Component } from "react";
import auth from "../services/authService";
import Joi from "joi-browser";
import Form from "./common/form";
import { Redirect } from "react-router";
import { addVehicle } from "../services/userService";
import { getSubscriptionData } from "../services/userService";
import companyLogo from './car_sports.png';

const user = auth.getCurrentUser();

class AddVehicle extends Form {
    state = {
    data: { vehicle_id: "", vehicle_class: "", vehicle_brand: "", vehicle_license: "",},
    errors: {},
  };

  schema = {
    vehicle_id: Joi.string().required().label("Vehicle ID"),
    vehicle_class: Joi.string().regex(RegExp(/^[a-zA-Z ]+$/)).required().label("Vehicle Class"),
    vehicle_model: Joi.string().regex(RegExp(/^[a-zA-Z ]+$/)).required().label("Vehicle Model"),
    vehicle_brand: Joi.string().required().label("Vehicle Brand"),
    vehicle_license: Joi.number().integer().min(0).max(200000).label("Vehicle License"),
    //vPspace: Joi.number().integer().min(0).max(8).label("Vehicle Passenger Space"),
    // vServiceStatus: Joi.string().regex(RegExp(/^[a-zA-Z ]+$/)).required().label("Vehicle Service Status"),
    // vCurrentStatus: Joi.string().regex(RegExp(/^[a-zA-Z ]+$/)).required().label("Vehicle Current Status"),
   // vLocation: Joi.string().required().label("Vehicle Current Location"),
    // vRoadService: Joi.string().regex(RegExp(/^[a-zA-Z ]+$/)).required().label("Vehicle Road Service"),
  };
  // adding
  doSubmit = async () => {

    try{
      console.log("Submitted");
      const { vehicle_id, vehicle_class, vehicle_brand, vehicle_license} = this.state.data;
      // const { paymentType } = this.state.data;
      const vehicleData = {
        vehicle_id,
        vehicle_class,
        vehicle_brand,
        vehicle_license,
        
      };
      /* vehicleData.vCurrentStatus = "Idle";
      const { data: planDetails } = await getSubscriptionData();
      console.log("DATA: ", planDetails);
      if (planDetails.current.length == 0)
      {
        vehicleData.vServiceStatus = "Inactive";
      }
      else{
        vehicleData.vServiceStatus = "Active";
      }
      vehicleData.vRoadService = "No Service"; */

      console.log(this.state.data);
      console.log("Submitted1");
      console.log(vehicleData);
      console.log("Submitted2");

      await addVehicle(vehicleData);
      this.props.history.push("/myVehicles");
    }
    catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log("CAUGHT HERE");
        const errors = this.state.errors;
        errors.vehicle_id = ex.response.data;
        this.setState({ errors });
      }
    }

  };


  render() {
    // const user = auth.getCurrentUser();
    return(
        <React.Fragment>

        <div className = "row">
        <div className="col-md-6 col-10 my-5">
        <div className="card mb-4 box-shadow">          
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Add your Vehicle</h4>
          </div>
          <div className="card-body" style={{backgroundColor: "#FAE395"}}>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("vehicle_id", "Vehicle ID")}
            {this.renderInput("vehicle_class", "Vehicle Class")}
            {this.renderInput("vehicle_brand", "Vehicle Brand")}
            {this.renderInput("vehicle_license", "Vehicle License")}
           
            {/* {this.renderInput("vServiceStatus", "Vehicle Service Status (Moving or Idle)")}
            {this.renderInput("vCurrentStatus", "Vehicle Current Status (Active or Inactive)")} */}
            {/*this.renderInput("vLocation", "Vehicle Location (City)")}
            {/* {this.renderInput("vRoadService", "Vehicle Road Service (Service required or No Service)")} */}
            {this.renderButton("Submit")}
          </form>
        </div>
        </div>
          </div>
          <div style={{width: "8px"},{height: "8px"}}>  
        <img src={companyLogo} />   
        </div>
        </div>
        </React.Fragment>
        );
       
    }
}

export default AddVehicle;