import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterTestingModule } from '@angular/router/testing'
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, HeaderComponent],
    imports: [RouterTestingModule]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'wayfarer'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('wayfarer');
  });
  it('should only contain the header component', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const headerTest = fixture.debugElement.queryAll(By.directive(HeaderComponent))
    expect(headerTest.length).toBe(1)
  })

});
