import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloodDonationService } from '../../blood-donation.service';
import { Donors } from '../../type/donors';

@Component({
  selector: 'app-donation-view-blood-groups',
  templateUrl: './donation-view-blood-groups.component.html',
  styleUrls: ['./donation-view-blood-groups.component.css']
})
export class DonationViewBloodGroupsComponent implements OnInit {

  donors : Donors[] = [];

  constructor(private bloodDonationService : BloodDonationService, private router : ActivatedRoute) { }

  ngOnInit(): void {

    this.router.params.subscribe(params => {
      const {group} = params;
      this.bloodDonationService.getDonorsByGroup(group).subscribe((donor : Donors[]) => {
        this.donors = donor;
        // console.log('donors : :',this.donors);
      });
    });

  }

}
