import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsRegistrationComponent } from './donors-registration.component';

describe('DonorsRegistrationComponent', () => {
  let component: DonorsRegistrationComponent;
  let fixture: ComponentFixture<DonorsRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorsRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
