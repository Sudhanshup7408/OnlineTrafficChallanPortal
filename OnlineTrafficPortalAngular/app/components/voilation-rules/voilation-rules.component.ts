import { Component, OnInit } from '@angular/core';
import { OnlineTrafficChallanServiceService } from 'src/app/services/online-traffic-challan-service.service';
import { Router } from '@angular/router';
import { Voilation } from 'src/app/common/voilation';

@Component({
  selector: 'app-voilation-rules',
  templateUrl: './voilation-rules.component.html',
  styleUrls: ['./voilation-rules.component.css']
})
export class VoilationRulesComponent implements OnInit {

  violations : Voilation[];

  constructor(private service : OnlineTrafficChallanServiceService, private route : Router) { }

  ngOnInit(): void {
    this.listOfViolations();
  }

  listOfViolations() {
    this.service.getAllVoilations().subscribe(data => {
      this.violations = data;
    })
  }

}
