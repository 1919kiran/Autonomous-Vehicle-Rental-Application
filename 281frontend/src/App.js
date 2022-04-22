import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navBar";
import Login from "./components/login";
import Logout from "./components/logout";
import Register from "./components/register";
import { Route, Navigate, Routes } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main className="container" style={{ paddingTop: "80px" }}>
          <Routes>
            <Route path="/login" component={Login}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/register" component={Register}></Route>
           
            <Navigate from="/" exact to="/login"></Navigate>
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}



export default App;