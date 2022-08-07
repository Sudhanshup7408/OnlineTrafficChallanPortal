import { Component, OnInit } from '@angular/core';
import { Police } from 'src/app/common/police';
import { FormsModule } from '@angular/forms';
import { OnlineTrafficChallanServiceService } from 'src/app/services/online-traffic-challan-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-police-login',
  templateUrl: './police-login.component.html',
  styleUrls: ['./police-login.component.css']
})
export class PoliceLoginComponent implements OnInit {
  email : string;
  password : string;
  police : Police = new Police(0,"","","");

  constructor(private service : OnlineTrafficChallanServiceService, private route : Router) { }

  ngOnInit(): void {
  
  }

  policehome() {
    this.service.getPoliceByEmail(this.email).subscribe(data => {
      this.police = data;
      if(this.police.password == this.password) {
        sessionStorage.setItem('log','1');
        sessionStorage.setItem('policeId',String(this.police.policeId))
        sessionStorage.setItem('policename',this.police.name);
        this.route.navigate(['/policehome']);
      }
      else{
        alert("Invalid Credentials!!");
      }
    })
    }

}
