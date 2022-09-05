import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationDetailsDataComponent } from './donation-details-data/donation-details-data.component';
import { DonationDetailsComponent } from './donation-details/donation-details.component';
import { DonationViewDetailsComponent } from './donation-view-details/donation-view-details.component';
import { RouterModule } from '@angular/router';
import { DonationViewBloodGroupsComponent } from './donation-view-blood-groups/donation-view-blood-groups.component';
import { FormsModule } from '@angular/forms';
import { DonationDetailsByTypeComponent } from './donation-details-by-type/donation-details-by-type.component';



@NgModule({
  declarations: [
    DonationDetailsDataComponent,
    DonationDetailsComponent,
    DonationViewDetailsComponent,
    DonationViewBloodGroupsComponent,
    DonationDetailsByTypeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class DonationDetailsModule { }
