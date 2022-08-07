import { Component, OnInit } from '@angular/core';
import { OnlineTrafficChallanServiceService } from 'src/app/services/online-traffic-challan-service.service';
import { Router } from '@angular/router';
import { Challan } from 'src/app/common/challan';

@Component({
  selector: 'app-paid-challan',
  templateUrl: './paid-challan.component.html',
  styleUrls: ['./paid-challan.component.css']
})
export class PaidChallanComponent implements OnInit {

  challans : Challan[];

  constructor(private service : OnlineTrafficChallanServiceService, private route : Router) { }

  ngOnInit(): void {
    this.listOfPaidChallans();
  }

  listOfPaidChallans() {
    this.service.getChallanByPoliceIdAndPaid(sessionStorage.getItem('policeId')).subscribe(data => {
      this.challans = data;
    })
  }

}
