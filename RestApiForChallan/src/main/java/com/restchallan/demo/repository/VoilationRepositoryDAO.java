package com.restchallan.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.restchallan.demo.entity.Voilation;

@RepositoryRestResource(path="voilation")
@CrossOrigin("http://localhost:4200/")
public interface VoilationRepositoryDAO extends JpaRepository<Voilation, Long>{

}
