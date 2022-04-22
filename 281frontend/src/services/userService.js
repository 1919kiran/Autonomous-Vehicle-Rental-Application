import http from "./httpService";
import * as apiUrl from "../config.json";

const apiEndpoint = apiUrl + "/user";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.user_id,
    password: user.password,
    name: user.first_name,
    //changed by kajal
  });
}

export function getSubscriptionData() {
  return http.get(apiEndpoint + "/plan");
}

export function addNewSubscription(subscriptionData) {
  return http.post(apiEndpoint + "/plan", {
    startDate: subscriptionData.startDate,
    endDate: subscriptionData.endDate,
    amount: subscriptionData.amount,
    paymentType: subscriptionData.paymentType,
    tag: subscriptionData.tag,
    //to be changed according to new db schema : comment by kajal
  });
}

export function getUserCount() {
  return http.get(apiEndpoint + "/numberOfUsers");
}

// added
export function addVehicle(vehicleData) {
  return http.post(apiEndpoint + "/myVehicles", {
    vehicle_id: vehicleData.vehicle_id,
    vehicle_class: vehicleData.vehicle_class,
    vehicle_model: vehicleData.vehicle_model,
    vehicle_brand: vehicleData.vehicle
    //already changed acc to new schema
  });
}

export function deleteVehicle(vehicleId) {
  return http.post(apiEndpoint + "/deleteVehicles" , {
    vehicle_id: vehicleId.vehicle_id,
  });
}

export function getVehicles() {
  return http.get(apiEndpoint + "/myVehicles");
}

export function getRides() {
  return http.get(apiEndpoint + "/myRides");
}

export function scheduleRide(scheduleData) {
  return http.post(apiEndpoint + "/scheduleRide", {
    vehicle_id: scheduleData.vehicle_id,
    Origin: scheduleData.Origin,
    Passengers: scheduleData.Passengers,
    Destination: scheduleData.Destination,
    Datetime: scheduleData.Datetime,
    //to be changed according to new db schema : comment by kajal
  });
}

