import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageInfoComponent } from './homepage-info.component';

describe('HomepageInfoComponent', () => {
  let component: HomepageInfoComponent;
  let fixture: ComponentFixture<HomepageInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageInfoComponent]
    });
    fixture = TestBed.createComponent(HomepageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
