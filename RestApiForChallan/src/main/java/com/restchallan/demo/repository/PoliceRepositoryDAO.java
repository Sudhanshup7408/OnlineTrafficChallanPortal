package com.restchallan.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.restchallan.demo.entity.Police;

@RepositoryRestResource(path="police")
@CrossOrigin("http://localhost:4200/")
public interface PoliceRepositoryDAO extends JpaRepository<Police, Long> {
	public Police findByEmail(String email);
}
