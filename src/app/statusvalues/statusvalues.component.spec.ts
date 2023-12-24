import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusvaluesComponent } from './statusvalues.component';

describe('StatusvaluesComponent', () => {
  let component: StatusvaluesComponent;
  let fixture: ComponentFixture<StatusvaluesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusvaluesComponent]
    });
    fixture = TestBed.createComponent(StatusvaluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
