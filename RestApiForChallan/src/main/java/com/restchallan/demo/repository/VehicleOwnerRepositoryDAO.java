package com.restchallan.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.restchallan.demo.entity.Police;
import com.restchallan.demo.entity.VehicleOwner;

@RepositoryRestResource(path="owner")
@CrossOrigin("http://localhost:4200/")
public interface VehicleOwnerRepositoryDAO extends JpaRepository<VehicleOwner, String>{
	public VehicleOwner findByEmail(String email);
}
