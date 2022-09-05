import { Component, OnInit } from '@angular/core';
import { BloodDonationService } from '../../blood-donation.service';
import { Donors } from '../../type/donors';

@Component({
  selector: 'app-donors-details',
  templateUrl: './donors-details.component.html',
  styleUrls: ['./donors-details.component.css']
})
export class DonorsDetailsComponent implements OnInit {

  donors : Donors[] = [];

  visible : boolean = false;

  constructor(private bloodDonationService : BloodDonationService) { }

  ngOnInit(): void {
    this.bloodDonationService.getAllDonorsDetails().subscribe((donor : Donors[]) => {
      this.donors = donor;
    });
  }

  onNewDonors(){
    this.visible = !this.visible;
  }

}
