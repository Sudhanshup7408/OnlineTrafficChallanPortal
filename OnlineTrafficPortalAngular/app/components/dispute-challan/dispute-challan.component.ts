import { Component, OnInit } from '@angular/core';
import { OnlineTrafficChallanServiceService } from 'src/app/services/online-traffic-challan-service.service';
import { Router } from '@angular/router';
import { Challan } from 'src/app/common/challan';

@Component({
  selector: 'app-dispute-challan',
  templateUrl: './dispute-challan.component.html',
  styleUrls: ['./dispute-challan.component.css']
})
export class DisputeChallanComponent implements OnInit {

  challans : Challan[];
  constructor(private service : OnlineTrafficChallanServiceService,private route : Router) { }

  ngOnInit(): void {
    this.listOfChallans();
  }

  listOfChallans() {
    this.service.getChallanByPoliceIdAndDisputed(sessionStorage.getItem('policeId')).subscribe(data => {
      this.challans = data;
    })
  }

  accept(challanNo) {
    this.service.deleteChallanById(challanNo).subscribe(data => {
      this.route.navigate(['policehome']);
    })
  }

  reject(challan) {
    challan.disputed = false;
    this.service.updateChallan(challan).subscribe(() => {
      this.route.navigate(['policehome']);
    })
  }

}
