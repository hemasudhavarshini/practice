import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemidonutComponent } from './semidonut.component';

describe('SemidonutComponent', () => {
  let component: SemidonutComponent;
  let fixture: ComponentFixture<SemidonutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemidonutComponent]
    });
    fixture = TestBed.createComponent(SemidonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
