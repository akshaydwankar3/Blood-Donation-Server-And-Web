import { Component } from '@angular/core';
import { BloodDonationService } from './blood-donation-mgmt/blood-donation.service';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blood-Donation-MGMT-Web';

  error : boolean = false;

  constructor(private bloodDonationService : BloodDonationService, public errorService : ErrorService){}

  ngOnInit() : void{
    this.bloodDonationService.getAllDonorsDetails().subscribe(donor => {

    },(err) => {
      this.errorService.fetchError();
    });
  }

}
