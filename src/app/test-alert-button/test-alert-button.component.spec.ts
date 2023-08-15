import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAlertButtonComponent } from './test-alert-button.component';

describe('TestAlertButtonComponent', () => {
  let component: TestAlertButtonComponent;
  let fixture: ComponentFixture<TestAlertButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestAlertButtonComponent]
    });
    fixture = TestBed.createComponent(TestAlertButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
