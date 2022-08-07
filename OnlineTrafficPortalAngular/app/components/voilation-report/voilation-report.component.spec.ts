import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoilationReportComponent } from './voilation-report.component';

describe('VoilationReportComponent', () => {
  let component: VoilationReportComponent;
  let fixture: ComponentFixture<VoilationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoilationReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoilationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
