package com.restchallan.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.restchallan.demo.entity.Challan;

@RepositoryRestResource(path="challan")
@CrossOrigin("http://localhost:4200/")
public interface ChallanRepositoryDAO extends JpaRepository<Challan, Long>{
	public List<Challan> findByisPaid(boolean ispaid);
	public List<Challan> findByVehicleNo(String vehicleNo);
	public List<Challan> findByisDisputed(boolean isDisputed);
	public List<Challan> findByLocation(String location);
}
