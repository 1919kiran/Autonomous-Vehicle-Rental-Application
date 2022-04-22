import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./common/button";
import auth from "../services/authService";
import { getVehicles } from "../services/userService";
import Table from "./common/table";
import { getSubscriptionData } from "../services/userService";

const user = auth.getCurrentUser();
// let user1 = user.name.slice(0,1).toUpperCase() + user.name.slice(1,user.name.length);
let user1 = "";
if (user != null) {
    user1 = user.name.slice(0, 1).toUpperCase() + user.name.slice(1, user.name.length);
}

class VehicleList extends Component {
    state = {vehicle_id: "", vehicle_class: "", vehicle_brand: "", vehicle_model: "", vehicle_license: ""};

    columns = [
        { path: "vehicle_id", label: "Vehicle Id" },
        { path: "vehicle_class", label: "Vehicle Class" },
        { path: "vehicle_brand", label: "Vehicle Brand" },
        { path: "vehicle_model", label: "Vehicle Model" },
        { path: "vehicle_license", label: "Vehicle License" },
       
      ];

    async componentDidMount() {
        const { data: vehicles } = await getVehicles();
        console.log("Made it: ", vehicles);
        const data1 = [];
        // vechiles.map((item) => {
        //     data1.push({g
        //       vId: item.vId,
        //       vColor: item.vColor,
        //       vMake: item.vMake,
        //     });
        // });
        this.setState({vehicles});

        // const { data: planDetails } = await getSubscriptionData();
        // console.log("PD", planDetails);
        // console.log("PD", planDetails.current);
        // console.log("PD1", vehicles.vservicestatus);

        // if (planDetails.current)
        // {
        //     this.state.vehicles.vservicestatus = "active";
        //     //this.setState(vehicles.vServiceStatus);
        // }
Id

        
        console.log("again made it", this.state.vehicles);
    }

    render() {
     
        const {vehicles} = this.state;
        // console.log(y);
        return (
            
            <div className="container" style={{marginLeft: "-130px"}}>
                <div>
                    <h1 className="text-center" style={{ marginBottom: "25px", marginLeft: "300px"}}>
                        { "My Vehicles"}</h1>
                </div>
                <div> 
                    {/* <Link style={{marginRight: "20px"}}
                        className="btn btn-dark"
                        to={{
                            pathname: "/myVehicles/addVehicle",
                        }}
                    >Add Vehicle</Link> */}
                    {/* <Link style={{marginRight: "20px"}}
                        className="btn btn-dark"
                        to={{
                            pathname: "/mySchedule",
                        }}
                    >Schedule Ride</Link> */}
                      
                    
                </div>
                
                <p></p>
                <div>
                    <Table data={vehicles} columns={this.columns} keyAtt="vehicle_id" ></Table>
                    <Link 
                        className="btn btn-dark"
                        to={{
                            pathname: "/deleteVehicle",
                        }}
                    >Delete Vehicle</Link>
                </div>
            </div>
        );
    }

}

export default VehicleList;