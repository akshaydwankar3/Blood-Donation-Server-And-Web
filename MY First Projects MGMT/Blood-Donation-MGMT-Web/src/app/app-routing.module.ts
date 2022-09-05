import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationDetailsByTypeComponent } from './blood-donation-mgmt/donation-details/donation-details-by-type/donation-details-by-type.component';
import { DonationDetailsDataComponent } from './blood-donation-mgmt/donation-details/donation-details-data/donation-details-data.component';
import { DonationDetailsComponent } from './blood-donation-mgmt/donation-details/donation-details/donation-details.component';
import { DonationViewBloodGroupsComponent } from './blood-donation-mgmt/donation-details/donation-view-blood-groups/donation-view-blood-groups.component';
import { DonationViewDetailsComponent } from './blood-donation-mgmt/donation-details/donation-view-details/donation-view-details.component';
import { DonorsAddDetailsComponent } from './blood-donation-mgmt/donors/donors-add-details/donors-add-details.component';
import { DonorsDetailsComponent } from './blood-donation-mgmt/donors/donors-details/donors-details.component';
import { DonorsFormComponent } from './blood-donation-mgmt/donors/donors-form/donors-form.component';
import { DonorsRegistrationComponent } from './blood-donation-mgmt/donors/donors-registration/donors-registration.component';

const routes: Routes = [
  {
    path : 'donors',
    component : DonorsRegistrationComponent,
    children : [
      {
        path : 'donors-details',
        component : DonorsDetailsComponent
      },
      {
        path : 'donors-add-details/donorsId/:donorId',
        component : DonorsAddDetailsComponent
      },
      {
        path : 'donors-registration-form',
        component : DonorsFormComponent
      }
    ]
  },
  {
    path : 'donation-details',
    component : DonationDetailsComponent,
    children : [
      {
        path : 'donation-details-data',
        component : DonationDetailsDataComponent
      },
      {
        path : 'donation-view-details/donationId/:donationId/donorId/:donorId',
        component : DonationViewDetailsComponent
      },
      {
        path : 'bloodGroups/:group',
        component : DonationViewBloodGroupsComponent
      },
      {
        path : 'donation-details-by-type/bloodGroup/:group/type/:type',
        component : DonationDetailsByTypeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
