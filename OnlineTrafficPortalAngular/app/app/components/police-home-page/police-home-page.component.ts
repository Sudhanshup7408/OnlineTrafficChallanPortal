import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-police-home-page',
  templateUrl: './police-home-page.component.html',
  styleUrls: ['./police-home-page.component.css']
})
export class PoliceHomePageComponent implements OnInit {

  name : string;

  constructor() { }

  ngOnInit(): void {
    this.name = sessionStorage.getItem('policename');
  }

}
