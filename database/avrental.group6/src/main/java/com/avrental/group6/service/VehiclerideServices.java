package com.avrental.group6.service;

import java.util.List;
import java.util.Map;

import javax.persistence.TypedQuery;

import com.avrental.group6.model.Reservation;

public interface VehiclerideServices {

	 	List<Reservation> listAll();
	    
	    Iterable<Reservation> getById(String id);

	    void delete(String id);

	    void saveVehicleride(Reservation vehicleride);
	    
	    TypedQuery<Reservation> constructQuery(Map<String, String> customQuery);
}
