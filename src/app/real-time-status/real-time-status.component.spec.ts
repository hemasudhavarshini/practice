import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeStatusComponent } from './real-time-status.component';

describe('RealTimeStatusComponent', () => {
  let component: RealTimeStatusComponent;
  let fixture: ComponentFixture<RealTimeStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealTimeStatusComponent]
    });
    fixture = TestBed.createComponent(RealTimeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
