import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeChallanComponent } from './dispute-challan.component';

describe('DisputeChallanComponent', () => {
  let component: DisputeChallanComponent;
  let fixture: ComponentFixture<DisputeChallanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeChallanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisputeChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
