import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DisplaycityComponent } from './displaycity.component';
import {RouterTestingModule } from '@angular/router/testing'
import { CitiesComponent } from '../cities/cities.component';
import { cities } from '../cities/cities';

describe('DisplaycityComponent', () => {
  let component: DisplaycityComponent;
  let fixture: ComponentFixture<DisplaycityComponent>;

  beforeEach( async() => {
    TestBed.configureTestingModule({
      declarations: [DisplaycityComponent, CitiesComponent], 
      imports:[RouterTestingModule]

    });
    fixture = TestBed.createComponent(DisplaycityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display a specific city name', () =>{
    expect("san Francisco").toBeTruthy();
  })

});
