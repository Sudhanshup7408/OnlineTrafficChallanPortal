import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoilationRulesComponent } from './voilation-rules.component';

describe('VoilationRulesComponent', () => {
  let component: VoilationRulesComponent;
  let fixture: ComponentFixture<VoilationRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoilationRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoilationRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
