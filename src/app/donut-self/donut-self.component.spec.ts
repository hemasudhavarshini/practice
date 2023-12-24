import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutSelfComponent } from './donut-self.component';

describe('DonutSelfComponent', () => {
  let component: DonutSelfComponent;
  let fixture: ComponentFixture<DonutSelfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonutSelfComponent]
    });
    fixture = TestBed.createComponent(DonutSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
