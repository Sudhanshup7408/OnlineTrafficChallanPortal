import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChallansComponent } from './view-challans.component';

describe('ViewChallansComponent', () => {
  let component: ViewChallansComponent;
  let fixture: ComponentFixture<ViewChallansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChallansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChallansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
