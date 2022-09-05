import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloodDonationService } from '../../blood-donation.service';
import { Donors } from '../../type/donors';

@Component({
  selector: 'app-donation-details-by-type',
  templateUrl: './donation-details-by-type.component.html',
  styleUrls: ['./donation-details-by-type.component.css']
})
export class DonationDetailsByTypeComponent implements OnInit {

  donors : Donors[] = [];

  constructor(private bloodDonationService : BloodDonationService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const {group,type} = params;
      this.bloodDonationService.getDonorByGroupAndType(group,type).subscribe((donor : Donors[]) => {
        this.donors = donor;
      });
    });
  }

}
