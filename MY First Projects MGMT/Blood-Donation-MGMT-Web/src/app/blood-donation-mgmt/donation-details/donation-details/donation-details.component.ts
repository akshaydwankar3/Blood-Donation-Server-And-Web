import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BloodDonationService } from '../../blood-donation.service';
import { Donation } from '../../type/donations';

@Component({
  selector: 'app-donation-details',
  templateUrl: './donation-details.component.html',
  styleUrls: ['./donation-details.component.css']
})
export class DonationDetailsComponent implements OnInit {

  group = '';

  action = '';

  type = '';

  volume = '';

  donation : Donation[] | null = null;

  constructor(private bloodDonationService : BloodDonationService) { }

  ngOnInit(): void {    
  }

  onView(){
    // console.log(this.group);
    this.group = '';
  }

  onCalculate(){

   this.bloodDonationService.getAllDonationDetails().subscribe(d => {
      this.donation = d;
      console.log(this.action,this.group,d);
      let sum = 0;
      d.forEach(dt => {
        if(dt.type == this.action&& dt.blood_donation_details.blood_group==this.group){
          sum+=dt.blood_volume_ml;
        }
      })
      this.volume=sum.toString();
      this.action='';
      this.group='';
    })

    // console.log('donation : ', this.donation);
    // let sum = 0;
    // this.donation?.forEach(dt => {
    //   if(dt.type==this.action && dt.blood_donation_details.blood_group==this.group){
    //     sum += dt.blood_volume_ml;
    //     console.log(dt.blood_volume_ml);
    //   }
    // })

    // console.log('sum : ',sum);
    
    // console.log('Actione : ',this.action);
    // this.bloodDonationService.getBloodVolume(this.group,this.action).subscribe(d => {
    //   this.volume = d[0].toString();
    //   this.group = '';
    //   this.action = '';
    // })
  }

  onFind(){
    this.group = '';
    this.type = '';
  }

}
