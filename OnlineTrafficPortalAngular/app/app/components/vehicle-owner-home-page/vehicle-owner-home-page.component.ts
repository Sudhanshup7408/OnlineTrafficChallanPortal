import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-owner-home-page',
  templateUrl: './vehicle-owner-home-page.component.html',
  styleUrls: ['./vehicle-owner-home-page.component.css']
})
export class VehicleOwnerHomePageComponent implements OnInit {

  name : string;

  constructor() { }

  ngOnInit(): void {
    this.name = sessionStorage.getItem('ownername')
  }

}
