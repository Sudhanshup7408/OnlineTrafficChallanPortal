import { Component, OnInit } from '@angular/core';
import { OnlineTrafficChallanServiceService } from 'src/app/services/online-traffic-challan-service.service';
import { Router } from '@angular/router';
import { VehicleOwner } from 'src/app/common/vehicle-owner';

@Component({
  selector: 'app-vehicle-owner-login',
  templateUrl: './vehicle-owner-login.component.html',
  styleUrls: ['./vehicle-owner-login.component.css']
})
export class VehicleOwnerLoginComponent implements OnInit {

  email : string;
  password : string;
  owner : VehicleOwner = new VehicleOwner("","","","",0);

  constructor(private service : OnlineTrafficChallanServiceService, private route : Router) { }

  ngOnInit(): void {
  }

  ownerhome() {
    this.service.getOwnerByEmail(this.email).subscribe(data => {
      this.owner = data;
      console.log(this.owner);
      if(this.owner.password == this.password) {
        sessionStorage.setItem('log','1');
        sessionStorage.setItem('ownername',this.owner.name);
        sessionStorage.setItem('mobileno',String(this.owner.mobileNo));
        sessionStorage.setItem('vehicleNo',this.owner.vehicleNo);
        this.route.navigate(['/ownerhome']);
      }
      else{
        alert("Invalid Credentials!!");
    }
    })
  }

}
