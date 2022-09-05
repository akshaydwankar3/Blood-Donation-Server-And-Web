import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationViewDetailsComponent } from './donation-view-details.component';

describe('DonationViewDetailsComponent', () => {
  let component: DonationViewDetailsComponent;
  let fixture: ComponentFixture<DonationViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationViewDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
