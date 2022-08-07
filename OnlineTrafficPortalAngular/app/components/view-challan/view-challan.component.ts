import { Component, OnInit } from '@angular/core';
import { OnlineTrafficChallanServiceService } from 'src/app/services/online-traffic-challan-service.service';
import { Challan } from 'src/app/common/challan';

@Component({
  selector: 'app-view-challan',
  templateUrl: './view-challan.component.html',
  styleUrls: ['./view-challan.component.css']
})
export class ViewChallanComponent implements OnInit {

  challans : Challan[]

  constructor(private service : OnlineTrafficChallanServiceService) { }

  ngOnInit(): void {
    this.listOfChallans();
  }

  listOfChallans() {
    this.service.getChallanByPoliceId(sessionStorage.getItem('policeId')).subscribe(data => {
      this.challans = data;
    })
  }

}
