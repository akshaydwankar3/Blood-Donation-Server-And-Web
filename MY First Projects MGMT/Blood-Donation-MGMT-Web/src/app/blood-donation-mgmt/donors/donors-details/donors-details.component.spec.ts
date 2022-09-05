import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsDetailsComponent } from './donors-details.component';

describe('DonorsDetailsComponent', () => {
  let component: DonorsDetailsComponent;
  let fixture: ComponentFixture<DonorsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
