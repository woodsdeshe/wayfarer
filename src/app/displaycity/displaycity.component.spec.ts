import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycityComponent } from './displaycity.component';

describe('DisplaycityComponent', () => {
  let component: DisplaycityComponent;
  let fixture: ComponentFixture<DisplaycityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaycityComponent]
    });
    fixture = TestBed.createComponent(DisplaycityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
