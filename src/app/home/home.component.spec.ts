import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageImgComponent } from '../homepage-img/homepage-img.component';
import { HomepageInfoComponent } from '../homepage-info/homepage-info.component';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

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

  it('should contain 1 homepage-img component', ()=>{
    const homepageImgTest = fixture.debugElement.queryAll(By.directive(HomepageImgComponent))
    expect(homepageImgTest.length).toBe(1);
  })
  it('should contain 1 homepage-info component', ()=>{
    const homepageInfoTest = fixture.debugElement.queryAll(By.directive(HomepageInfoComponent))
    expect(homepageInfoTest.length).toBe(1);
  })
});
