import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineTrafficChallanServiceService } from 'src/app/services/online-traffic-challan-service.service';
import { Challan } from 'src/app/common/challan';
import { getLocaleTimeFormat, Time } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  challan : Challan = new Challan(0,0,new Date,new Date,0,"","","",0,"",false,false);

  constructor(private route: Router, private service : OnlineTrafficChallanServiceService) { }

  ngOnInit(): void {
  }

  policeLogin() {
    this.route.navigate(['/police']);
  }

  ownerLogin() {
    this.route.navigate(['/owner']);
  }
}
