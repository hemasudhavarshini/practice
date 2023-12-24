import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiveChartsComponent } from './hive-charts.component';

describe('HiveChartsComponent', () => {
  let component: HiveChartsComponent;
  let fixture: ComponentFixture<HiveChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiveChartsComponent]
    });
    fixture = TestBed.createComponent(HiveChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
