import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationDetailsByTypeComponent } from './donation-details-by-type.component';

describe('DonationDetailsByTypeComponent', () => {
  let component: DonationDetailsByTypeComponent;
  let fixture: ComponentFixture<DonationDetailsByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationDetailsByTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationDetailsByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
