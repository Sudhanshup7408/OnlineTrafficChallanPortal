package com.restchallan.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Police")
public class Police {
	
	@Id
	@Column(name="policeid")
	private long policeId;

	@Column(name="name")
	private String name;
	
	@Column(name="email")
	private String email;
	
	@Column(name="pswd")
	private String password;
	
	public Police() {
		
	}

	public Police(long policeId, String name, String email, String password) {
		super();
		this.policeId = policeId;
		this.name = name;
		this.email = email;
		this.password = password;
	}

	public long getPoliceId() {
		return policeId;
	}

	public void setPoliceId(long policeId) {
		this.policeId = policeId;
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


	@Override
	public String toString() {
		return "Police [policeId=" + policeId + ", name=" + name + ", email=" + email + ", password=" + password
				+ "]";
	}
	
	
}
