import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationDetailsModule } from './donation-details/donation-details.module';
import { DonorsModule } from './donors/donors.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    DonationDetailsModule,
    DonorsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class BloodDonationMgmtModule { }
