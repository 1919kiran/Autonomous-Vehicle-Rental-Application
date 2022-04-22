package com.avrental.group6.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name= "reservation")
@Entity
public class Reservation {

	@Id
	private String reservation_id;
	private String vehicle_id;
	private String user_id;
	private String start_location;
	private String end_location;
	private String start_time;
	private String end_time;
	private String payment_type;
	private float trip_price;
	private int reward_points;


	private int getreward_points(){
		return reward_points;
	}
	private int setreward_points(){
		this.setreward_points=setreward_points;
	}
	


	
	public String getReservation_id() {
		return reservation_id;
	}
	public void setReservation_id(String reservation_id) {
		this.reservation_id = reservation_id;
	}
	public String getVehicle_id() {
		return vehicle_id;
	}
	public void setVehicle_id(String vehicle_id) {
		this.vehicle_id = vehicle_id;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getStart_location() {
		return start_location;
	}
	public void setStart_location(String start_location) {
		this.start_location = start_location;
	}
	public String getEnd_location() {
		return end_location;
	}
	public void setEnd_location(String end_location) {
		this.end_location = end_location;
	}
	public String getStart_time() {
		return start_time;
	}
	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}
	public String getEnd_time() {
		return end_time;
	}
	public void setEnd_time(String end_time) {
		this.end_time = end_time;
	}
	public String getPayment_type() {
		return payment_type;
	}
	public void setPayment_type(String payment_type) {
		this.payment_type = payment_type;
	}
	public float getTrip_price() {
		return trip_price;
	}
	public void setTrip_price(float trip_price) {
		this.trip_price = trip_price;
	}
	
	
}
