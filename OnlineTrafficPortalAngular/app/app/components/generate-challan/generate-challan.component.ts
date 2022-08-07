import { Component, OnInit } from '@angular/core';
import { Challan } from 'src/app/common/challan';
import { OnlineTrafficChallanServiceService } from 'src/app/services/online-traffic-challan-service.service';
import { Router } from '@angular/router';
import { Police } from 'src/app/common/police';

@Component({
  selector: 'app-generate-challan',
  templateUrl: './generate-challan.component.html',
  styleUrls: ['./generate-challan.component.css']
})
export class GenerateChallanComponent implements OnInit {

  amount : number;
  policeId : number;
  police : Police = new Police(0,"","","");
  challan : Challan = new Challan(0,0,new Date(),new Date(),0,"","",null,0,"",false,false);

  constructor(private service : OnlineTrafficChallanServiceService, private route : Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.getVoilationById(this.challan.voilationId).subscribe(data => {
    this.amount=data.compensationamount;
    this.challan.challanAmount = this.amount;
    this.challan.policeId = +sessionStorage.getItem('policeId');
    console.log(this.challan);
    /*if (this.service.getChallanByVehicleNo(this.challan.vehicleNo).arrayLength==0) {
      console.log("hai");
      sessionStorage.setItem('newvehicleno',this.challan.vehicleNo);
      this.route.navigate(['/ownerform']);
    }*/
    this.service.SavingChallanDetails(this.challan).subscribe(() => {
      console.log("hello");
    this.route.navigate(['/viewbypolice']);
    });
    })
  }

}
