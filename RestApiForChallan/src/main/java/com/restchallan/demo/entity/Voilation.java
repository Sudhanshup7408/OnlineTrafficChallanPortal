package com.restchallan.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Voilation")
public class Voilation {
	
	@Id
	@Column(name="voilationid")
	private long voilationId;
	
	@Column(name="rule")
	private String rule;
	
	@Column(name="compensationamount")
	private long compensationamount;
	
	public Voilation() {
		
	}

	public Voilation(long voilationId, String rule, long compensationamount) {
		super();
		this.voilationId = voilationId;
		this.rule = rule;
		this.compensationamount = compensationamount;
	}

	public long getVoilationId() {
		return voilationId;
	}

	public void setVoilationId(long voilationId) {
		this.voilationId = voilationId;
	}

	public String getRule() {
		return rule;
	}

	public void setRule(String rule) {
		this.rule = rule;
	}

	public long getCompensationamount() {
		return compensationamount;
	}

	public void setCompensationamount(long compensationamount) {
		this.compensationamount = compensationamount;
	}

	@Override
	public String toString() {
		return "Voilation [voilationId=" + voilationId + ", rule=" + rule + ", compensationamount=" + compensationamount
				+ "]";
	}
	
	

}
