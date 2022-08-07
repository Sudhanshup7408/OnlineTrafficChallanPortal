import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Challan } from 'src/app/common/challan';
import { OnlineTrafficChallanServiceService } from 'src/app/services/online-traffic-challan-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  amount: number
  policeId: number
  voilationId: number
  date : Date =new Date()
  challanN: number
  challan :Challan = new Challan(0,0,new Date(),new Date(),0,"","","",0,"",false,false)
  constructor(private route :Router, private service : OnlineTrafficChallanServiceService) { }

  ngOnInit(): void {
    this.amount = +sessionStorage.getItem('amount');
    this.policeId = +sessionStorage.getItem('Police Id');
    this.voilationId = +sessionStorage.getItem('violation ID');
    this.challanN = +sessionStorage.getItem('challanN');
    this.service.getChallanById(this.challanN).subscribe(data=>{
      this.challan = data
    })
  }
  complete(){
    alert("Payment Successfull");
    this.challan.paid = true;
    this.service.updateChallan(this.challan).subscribe(()=>{
      console.log(this.challan);
      this.route.navigate(['/ownerhome']);
    });
   
  }
  
}
