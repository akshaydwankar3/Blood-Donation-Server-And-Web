import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloodDonationService } from '../../blood-donation.service';
import { Donors } from '../../type/donors';

@Component({
  selector: 'app-donors-add-details',
  templateUrl: './donors-add-details.component.html',
  styleUrls: ['./donors-add-details.component.css']
})
export class DonorsAddDetailsComponent implements OnInit {

  date = '';

  blood_volume_ml = '';

  type = '';

  blood_donation_details = {};

  constructor(private bloodDonationService : BloodDonationService, private router : ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSave(){
    this.date = this.date;
    this.blood_volume_ml = this.blood_volume_ml;
    this.type = this.type,
    this.router.params.subscribe(params => {
      const {donorId} = params;
      this.bloodDonationService.getDonorsById(donorId).subscribe((donor : Donors) => {
        this.blood_donation_details = donor;
        this.bloodDonationService.createNewDonationDetails(this.date,parseInt(this.blood_volume_ml),this.type,this.blood_donation_details).subscribe(donation => {
          // console.log('Donation Created : ',donation);
          alert('Data Inserted...!');
          this.date = '';
          this.blood_volume_ml = '';
          this.type = '';
        });
      });
      // this.blood_donation_details = donorId;
      // console.log(this.date,this.blood_volume_ml,this.type,this.blood_donation_details);
    });
  }

}
