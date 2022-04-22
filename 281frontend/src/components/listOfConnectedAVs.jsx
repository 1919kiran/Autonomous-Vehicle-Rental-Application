import React, { Component } from "react";

import withCardView from "./common/withCardView";
import Table from "./common/table";

class ListOfConnectedAVs extends Component {
  state = {};

  columns = [
    { path: "vehicle_id", label: "AV ID" },
    { path: "vehicle_class", label: "AV Class" },
    { path: "vehicle_model", label: "AV Model" },
    { path: "vehicle_brand", label: "AV Brand" },
    { path: "vehicle_license", label: "AV License" },
  
  ];

  render() {
    return (
      <React.Fragment>
        <h1>List of connected AVs</h1>
        <div
          className="dropdown-divider"
          style={{
            marginBottom: "30px",
            borderBlockColor: "#BEE5F0",
          }}
        ></div>
        <Table
          data={this.props.data}
          columns={this.columns}
          keyAtt="number"
        ></Table>
      </React.Fragment>
    );
  }
}

export default withCardView(ListOfConnectedAVs);
