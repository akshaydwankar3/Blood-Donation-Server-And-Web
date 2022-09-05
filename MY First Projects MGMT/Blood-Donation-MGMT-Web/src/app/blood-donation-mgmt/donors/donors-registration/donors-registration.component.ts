import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donors-registration',
  templateUrl: './donors-registration.component.html',
  styleUrls: ['./donors-registration.component.css']
})
export class DonorsRegistrationComponent implements OnInit {

  isButtonShow : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
