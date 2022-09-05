import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsAddDetailsComponent } from './donors-add-details.component';

describe('DonorsAddDetailsComponent', () => {
  let component: DonorsAddDetailsComponent;
  let fixture: ComponentFixture<DonorsAddDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorsAddDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorsAddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
