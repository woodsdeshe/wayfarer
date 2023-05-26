import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageImgComponent } from '../homepage-img/homepage-img.component';
import { HomepageInfoComponent } from '../homepage-info/homepage-info.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, HomepageImgComponent, HomepageInfoComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
