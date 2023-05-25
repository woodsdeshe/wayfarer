import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  canSeeSearch: boolean = false;
  toggleSearchBar() {
      this.canSeeSearch = false 
  }
  searchBack() {
    this.canSeeSearch = true;
  }
}
