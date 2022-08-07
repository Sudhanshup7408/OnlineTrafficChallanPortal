import { Component, OnInit } from '@angular/core';
import { OnlineTrafficChallanServiceService } from 'src/app/services/online-traffic-challan-service.service';
import { Router } from '@angular/router';
import { Challan } from 'src/app/common/challan';

@Component({
  selector: 'app-voilation-report',
  templateUrl: './voilation-report.component.html',
  styleUrls: ['./voilation-report.component.css']
})
export class VoilationReportComponent implements OnInit {

  challans : Challan[];
  location : string;

  constructor(private service : OnlineTrafficChallanServiceService, private route : Router) { }

  ngOnInit(): void {
  }

  search() {
    this.service.getChallanByPincode(this.location).subscribe(data => {
      this.challans = data;
    })
  }

}
