import { Component, OnInit } from '@angular/core';
import { BloodDonationService } from '../../blood-donation.service';
import { Address } from '../../type/donors';

@Component({
  selector: 'app-donors-form',
  templateUrl: './donors-form.component.html',
  styleUrls: ['./donors-form.component.css']
})
export class DonorsFormComponent implements OnInit {

  type = '';

  name = '';

  gender = '';

  age = '';

  contacts = '';

  email = '';

  country = '';

  state = '';

  city = '';

  pincode = '';

  address : Address = {
    country : '',
    state : '',
    city : '',
    pincode : parseInt('')
  };

  blood_group = '';

  constructor(private bloodDonationService : BloodDonationService) { }

  ngOnInit(): void {
  }

  // type : string, name : string, gender : string, age : number, contacts : number[], address : Address, email : string, blood_group : string

  onSaveDonors(){
    this.address.country=this.country;
    this.address.state = this.state;
    this.address.city = this.city;
    this.address.pincode = parseInt(this.pincode);
    this.bloodDonationService.createNewDonors(this.type,this.name,this.gender,parseInt(this.age),parseInt(this.contacts),this.email,this.address,this.blood_group).subscribe(donor => {
      // console.log('New Donors : ',donor);
      alert('Data Inserted...!');
      this.type = '';
      this.name = '';
      this.gender = '';
      this.age = '';
      this.contacts = '';
      this.email = '';
      this.country = '';
      this.state = '';
      this.city = '';
      this.pincode = '';
      this.blood_group = '';
    });

  }

}
