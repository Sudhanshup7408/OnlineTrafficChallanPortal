import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceHomePageComponent } from './police-home-page.component';

describe('PoliceHomePageComponent', () => {
  let component: PoliceHomePageComponent;
  let fixture: ComponentFixture<PoliceHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliceHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliceHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
