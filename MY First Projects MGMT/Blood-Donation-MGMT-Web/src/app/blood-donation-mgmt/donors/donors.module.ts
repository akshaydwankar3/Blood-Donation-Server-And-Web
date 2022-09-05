import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonorsRegistrationComponent } from './donors-registration/donors-registration.component';
import { DonorsDetailsComponent } from './donors-details/donors-details.component';
import { RouterModule } from '@angular/router';
import { DonorsAddDetailsComponent } from './donors-add-details/donors-add-details.component';
import { FormsModule } from '@angular/forms';
import { DonorsFormComponent } from './donors-form/donors-form.component';



@NgModule({
  declarations: [
    DonorsRegistrationComponent,
    DonorsDetailsComponent,
    DonorsAddDetailsComponent,
    DonorsFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class DonorsModule { }
