import { Component, OnInit } from '@angular/core';
import { BloodDonationService } from '../../blood-donation.service';
import { Donation } from '../../type/donations';

@Component({
  selector: 'app-donation-details-data',
  templateUrl: './donation-details-data.component.html',
  styleUrls: ['./donation-details-data.component.css']
})
export class DonationDetailsDataComponent implements OnInit {

  donations : Donation[] = [];

  constructor(private bloodDonationService : BloodDonationService) { }

  ngOnInit(): void {
    this.bloodDonationService.getAllDonationDetails().subscribe((donation : Donation[]) => {
      this.donations = donation;
    });
  }

}
