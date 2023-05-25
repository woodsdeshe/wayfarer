import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageImgComponent } from './homepage-img.component';

describe('HomepageImgComponent', () => {
  let component: HomepageImgComponent;
  let fixture: ComponentFixture<HomepageImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageImgComponent]
    });
    fixture = TestBed.createComponent(HomepageImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
