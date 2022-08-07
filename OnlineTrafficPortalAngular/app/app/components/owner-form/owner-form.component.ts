import { Component, OnInit } from '@angular/core';
import { VehicleOwner } from 'src/app/common/vehicle-owner';
import { OnlineTrafficChallanServiceService } from 'src/app/services/online-traffic-challan-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css']
})
export class OwnerFormComponent implements OnInit {

  owner : VehicleOwner = new VehicleOwner(sessionStorage.getItem('newvehicleno'),"","","",0);

  constructor(private service : OnlineTrafficChallanServiceService, private route : Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.SavingOwnerDetails(this.owner).subscribe(() => {
      this.route.navigate(['policehome']);
    })
  }

}
