import React, { Component } from "react";
import auth from "../services/authService";
import Joi from "joi-browser";
import Form from "./common/form";
import { Redirect } from "react-router";
import { getVehicles } from "../services/userService";
import { deleteVehicle } from "../services/userService";

const user = auth.getCurrentUser();

class DeleteVehicle extends Form {
    state = {
        data: { vehicle_id: ""},
        errors: {},
    };

    schema = {
        vehicle_id: Joi.string().required().label("Vehicle ID"),
      };
  

  doSubmit = async () => {

    try{
      console.log("Submitted");
      const { vehicle_id } = this.state.data;
      // const { paymentType } = this.state.data;
      const vehicleId = {
        vehicle_id
      };
    
      console.log(this.state.data);
      console.log("Submitted1");
      console.log(vehicleId);
      console.log("Submitted2");
      await deleteVehicle(vehicleId);
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
// async componentDidMount() {
// 	const { data: vehicles } = await getVehicles();
//     var vIds = vehicles.map(function (f) {
//         return f.vehicle_id
//       });
//     console.log(vehicle_id);
//     this.setState({
// 		vehicle_id: vIds
// 	});
// }

  render() {
    // const user = auth.getCurrentUser();

    return(
        <React.Fragment>
        <div className="col-md-10 col-10 my-5">

<div className="card mb-4 box-shadow">  

<div className="card-header">
  <h4 className="my-0 font-weight-normal">Delete Vehicle</h4>
 </div>
<div className="card-body" style={{backgroundColor: "#FAE395"}}>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("vehicle_id", "VID")}
                {this.renderButton("Submit")}
            </form>
        </div>
        </div>
        </div>

        </React.Fragment>
        );
       
    }
}

export default DeleteVehicle;