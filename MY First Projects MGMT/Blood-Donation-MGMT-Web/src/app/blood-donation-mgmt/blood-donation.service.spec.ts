import { TestBed } from '@angular/core/testing';

import { BloodDonationService } from './blood-donation.service';

describe('BloodDonationService', () => {
  let service: BloodDonationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodDonationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
