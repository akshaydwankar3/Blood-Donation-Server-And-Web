import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsFormComponent } from './donors-form.component';

describe('DonorsFormComponent', () => {
  let component: DonorsFormComponent;
  let fixture: ComponentFixture<DonorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
