import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display a search bar while on viewing homepage components', ()=>{
      component.canSeeSearch = false
      expect(component.canSeeSearch).toBeFalse();
  })
  it('should display search bar once cities link as been clicked', ()=>{
      component.canSeeSearch = false
      component.searchBack()
      expect(component.canSeeSearch).toBeTrue();
  })
  it('should remove search bar once home link is clicked again', ()=>{
    component.canSeeSearch = true
    component.toggleSearchBar()
    expect(component.canSeeSearch).toBeFalse();
})

});
