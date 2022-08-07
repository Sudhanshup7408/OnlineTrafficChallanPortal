import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateChallanComponent } from './generate-challan.component';

describe('GenerateChallanComponent', () => {
  let component: GenerateChallanComponent;
  let fixture: ComponentFixture<GenerateChallanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateChallanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
