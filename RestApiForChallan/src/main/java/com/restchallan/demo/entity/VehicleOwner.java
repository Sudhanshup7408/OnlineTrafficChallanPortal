package com.restchallan.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="vehicleowner")
public class VehicleOwner {
	
	@Id
	@Column(name="vehicleno")
	private String vehicleNo;
	
	@Column(name="name")
	private String name;
	
	@Column(name="email")
	private String email;
	
	@Column(name="password")
	private String password;
	
	
	@Column(name="mobileno")
	private long mobileNo;
	
	public VehicleOwner() {
		
	}

	public VehicleOwner(String vehicleNo, String name, String email, String password, long mobileNo) {
		super();
		this.vehicleNo = vehicleNo;
		this.name = name;
		this.email = email;
		this.password = password;
		this.mobileNo = mobileNo;
	}

	public String getVehicleNo() {
		return vehicleNo;
	}

	public void setVehicleNo(String vehicleNo) {
		this.vehicleNo = vehicleNo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(long mobileNo) {
		this.mobileNo = mobileNo;
	}

	@Override
	public String toString() {
		return "VehicleOwner [vehicleNo=" + vehicleNo + ", name=" + name + ", email=" + email + ", password=" + password
				+ ", mobileNo=" + mobileNo + "]";
	}

	
}
