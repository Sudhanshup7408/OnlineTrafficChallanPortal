import { Component, OnInit } from '@angular/core';
import { OnlineTrafficChallanServiceService } from 'src/app/services/online-traffic-challan-service.service';
import { Challan } from 'src/app/common/challan';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-challans',
  templateUrl: './view-challans.component.html',
  styleUrls: ['./view-challans.component.css']
})
export class ViewChallansComponent implements OnInit {

  challans : Challan[];
  todaydate : Date = new Date()
  constructor(private service : OnlineTrafficChallanServiceService, private route : Router) { }

  ngOnInit(): void {
    this.listOfChallans();
  }

  listOfChallans() {
    this.service.getChallanByVehicleNo(sessionStorage.getItem('vehicleNo')).subscribe(data => {
      this.challans = data;
    })
  }

  pay(challan) {
    console.log(this.todaydate.valueOf())
    console.log(this.todaydate)
      if(new Date(challan.dueDate) <new Date()){
        alert("Due Date is Expired!!\n Go to Court To Submit the Challan");
        this.route.navigate(['/ownerhome']);
      }
      else{
        sessionStorage.setItem('amount',String(challan.challanAmount));
        sessionStorage.setItem('violation ID',String(challan.voilationId));
        sessionStorage.setItem('Police Id',String(challan.policeId));
        sessionStorage.setItem('challanN',String(challan.challanNo));
        this.route.navigate(['/payment']);
      } 
  }

  disputeform(challan) {
    if (challan.dispute == null) {
    sessionStorage.setItem('challanNo',challan.challanNo);
    this.route.navigate(['disputeform']);
    }
    else {
      alert("already disputed");
      this.route.navigate(['/ownerhome']);
    }
  }

}
