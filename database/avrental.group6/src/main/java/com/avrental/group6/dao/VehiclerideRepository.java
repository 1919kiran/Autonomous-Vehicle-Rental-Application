package com.avrental.group6.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.avrental.group6.model.Reservation;


public interface VehiclerideRepository extends CrudRepository<Reservation, String>, JpaRepository<Reservation, String> {

}
