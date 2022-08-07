import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidChallanComponent } from './paid-challan.component';

describe('PaidChallanComponent', () => {
  let component: PaidChallanComponent;
  let fixture: ComponentFixture<PaidChallanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidChallanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaidChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
