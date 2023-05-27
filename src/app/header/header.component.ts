import { Component } from '@angular/core';
import { cities } from '../cities/cities';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  keyword: string='';
  arrayOfPosts: any[]= [];
  cities = cities; 

  constructor(private route: Router, private dataService: DataService){}
  canSeeSearch: boolean = false;
  toggleSearchBar(): void {
      this.canSeeSearch = false 
  }
  searchBack(): void{
    this.canSeeSearch = true;
  }
  onSubmit(){
    if(this.keyword){
      let searchResults = this.cities.flatMap(city => city.post)
      this.arrayOfPosts = searchResults.filter(post=>post.description.includes(this.keyword))
      this.dataService.setData(this.arrayOfPosts);
      this.keyword='';
    }
    this.route.navigate(['/allposts'])
    }
}
