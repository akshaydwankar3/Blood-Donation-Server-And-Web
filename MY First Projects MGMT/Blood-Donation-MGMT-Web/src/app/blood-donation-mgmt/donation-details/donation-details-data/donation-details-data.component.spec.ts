import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationDetailsDataComponent } from './donation-details-data.component';

describe('DonationDetailsDataComponent', () => {
  let component: DonationDetailsDataComponent;
  let fixture: ComponentFixture<DonationDetailsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationDetailsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationDetailsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
