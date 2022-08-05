package com.restchallan.demo.entity;

import java.sql.Timestamp;
import java.sql.Date;
import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Challan")
public class Challan {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="challanno")
	private long challanNo;
	
	@Column(name="challanamount")
	private long challanAmount;
	
	@Column(name="ispaid")
	private boolean isPaid;
	
	@Column(name="duedate")
	private Timestamp dueDate;
	
	
	@Column(name="date")
	private Timestamp date;
	
	@Column(name="voilationid")
	private long voilationId;
	
	@Column(name="proofurl")
	private String proofUrl;
	
	@Column(name="location")
	private String location;
	
	@Column(name="dispute")
	private String dispute;
	
	@Column(name="policeid")
	private long policeId;
	
	@Column(name="vehicleno")
	private String vehicleNo;
	
	@Column(name="isdisputed")
	private boolean isDisputed;
	
	public Challan() {
		
	}

	

	public String getDispute() {
		return dispute;
	}



	public void setDispute(String dispute) {
		this.dispute = dispute;
	}

	

	public boolean isDisputed() {
		return isDisputed;
	}



	public void setDisputed(boolean isDisputed) {
		this.isDisputed = isDisputed;
	}



	public long getChallanAmount() {
		return challanAmount;
	}



	public void setChallanAmount(long challanAmount) {
		this.challanAmount = challanAmount;
	}



	public boolean isPaid() {
		return isPaid;
	}



	public void setPaid(boolean isPaid) {
		this.isPaid = isPaid;
	}



	public Timestamp getDueDate() {
		return dueDate;
	}



	public void setDueDate(Timestamp dueDate) {
		this.dueDate = dueDate;
	}


	public long getVoilationId() {
		return voilationId;
	}



	public void setVoilationId(long voilationId) {
		this.voilationId = voilationId;
	}



	public Challan(long challanNo, long challanAmount, boolean isPaid, Timestamp dueDate, Timestamp date, long voilationId, String proofUrl, String location, String dispute, long policeId, String vehicleNo,
			boolean isDisputed) {
		super();
		this.challanNo = challanNo;
		this.challanAmount = challanAmount;
		this.isPaid = isPaid;
		this.dueDate = dueDate;
		this.date = date;
		this.voilationId = voilationId;
		this.proofUrl = proofUrl;
		this.location = location;
		this.dispute = dispute;
		this.policeId = policeId;
		this.vehicleNo = vehicleNo;
		this.isDisputed = isDisputed;
	}



	public long getPoliceId() {
		return policeId;
	}



	public void setPoliceId(long policeId) {
		this.policeId = policeId;
	}



	public String getVehicleNo() {
		return vehicleNo;
	}



	public void setVehicleNo(String vehicleNo) {
		this.vehicleNo = vehicleNo;
	}



	public long getChallanNo() {
		return challanNo;
	}

	public void setChallanNo(long challanNo) {
		this.challanNo = challanNo;
	}

	public Timestamp getDate() {
		return date;
	}

	public void setDate(Timestamp date) {
		this.date = date;
	}

	public String getProofUrl() {
		return proofUrl;
	}

	public void setProofUrl(String proofUrl) {
		this.proofUrl = proofUrl;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}



	@Override
	public String toString() {
		return "Challan [challanNo=" + challanNo + ", challanAmount=" + challanAmount + ", isPaid=" + isPaid
				+ ", dueDate=" + dueDate + ", date=" + date + ", voilationId=" + voilationId + ", proofUrl=" + proofUrl
				+ ", location=" + location + ", dispute=" + dispute + ", policeId=" + policeId + ", vehicleNo="
				+ vehicleNo + ", isDisputed=" + isDisputed + "]";
	}

	
}
