import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationViewBloodGroupsComponent } from './donation-view-blood-groups.component';

describe('DonationViewBloodGroupsComponent', () => {
  let component: DonationViewBloodGroupsComponent;
  let fixture: ComponentFixture<DonationViewBloodGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationViewBloodGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationViewBloodGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
