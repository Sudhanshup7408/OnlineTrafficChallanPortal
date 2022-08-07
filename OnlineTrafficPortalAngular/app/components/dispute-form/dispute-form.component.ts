import { Component, OnInit } from '@angular/core';
import { Challan } from 'src/app/common/challan';
import { OnlineTrafficChallanServiceService } from 'src/app/services/online-traffic-challan-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispute-form',
  templateUrl: './dispute-form.component.html',
  styleUrls: ['./dispute-form.component.css']
})
export class DisputeFormComponent implements OnInit {

  challanId : number;
  challan : Challan;
  dispute: string;

  constructor(private service : OnlineTrafficChallanServiceService, private route : Router) { }

  ngOnInit(): void {
    this.challanDetails();
  }

  challanDetails() {
    this.challanId = +sessionStorage.getItem('challanNo')
    this.service.getChallanById(this.challanId).subscribe(data => {
      this.challan = data;
      })
  }

  onSubmit() {
    this.challan.dispute = this.dispute;
      this.challan.disputed = true;
      console.log(this.challan);
      this.service.updateChallan(this.challan).subscribe(() => {
        this.route.navigate(['/viewbyowner']);
      })
  }

}
