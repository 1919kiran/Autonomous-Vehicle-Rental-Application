package com.avrental.group6.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name= "vehicledetails")
@Entity
public class Vehicle {


	@Id
	private String vehicle_id;
	private String vehicle_class;
	private String vehicle_model;
	private String vehicle_brand;
	private String vehicle_license;
	private String Vservicestatus;
	
	public String getVservicestatus() {
		return Vservicestatus;
	}
	public void setVservicestatus(String vservicestatus) {
		Vservicestatus = vservicestatus;
	}
	public String getVehicle_id() {
		return vehicle_id;
	}
	public void setVehicle_id(String vehicle_id) {
		this.vehicle_id = vehicle_id;
	}
	public String getVehicle_class() {
		return vehicle_class;
	}
	public void setVehicle_class(String vehicle_class) {
		this.vehicle_class = vehicle_class;
	}
	public String getVehicle_model() {
		return vehicle_model;
	}
	public void setVehicle_model(String vehicle_model) {
		this.vehicle_model = vehicle_model;
	}
	public String getVehicle_brand() {
		return vehicle_brand;
	}
	public void setVehicle_brand(String vehicle_brand) {
		this.vehicle_brand = vehicle_brand;
	}
	public String getVehicle_license() {
		return vehicle_license;
	}
	public void setVehicle_license(String vehicle_license) {
		this.vehicle_license = vehicle_license;
	}
	
	
	
	    
}
