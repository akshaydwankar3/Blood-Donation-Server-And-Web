import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloodDonationService } from '../../blood-donation.service';
import { Donation } from '../../type/donations';
import { Donors } from '../../type/donors';

@Component({
  selector: 'app-donation-view-details',
  templateUrl: './donation-view-details.component.html',
  styleUrls: ['./donation-view-details.component.css']
})
export class DonationViewDetailsComponent implements OnInit {

  donors : Donors | null = null;

  donations : Donation | null = null;

  constructor(private bloodDonationService : BloodDonationService, private router : ActivatedRoute) { }

  ngOnInit(): void {
      this.router.params.subscribe(params => {
        const {donationId,donorId} = params;
       this.bloodDonationService.getDonorsById(donorId).subscribe(donor => {
        this.donors = donor;
        // console.log('donors : : ',this.donors);
       });
      });
      
    }
    
  

}
