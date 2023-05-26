import { Component, OnInit } from '@angular/core';
import { cities } from '../cities/cities';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.css'],
})
export class ShowPageComponent implements OnInit {
  cities = cities;
  city: any;
  post: any;
  cityId: any;
  postId: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
        let cityParamId = params.get('id') || ''
        this.cityId = parseInt(cityParamId) 
        let postParamId = params.get('postId') || ''
        this.postId = parseInt(postParamId)
        this.city = cities.find( city => city.id === this.cityId)
        if(this.city){
          return this.post = this.city.post.find((p: { id: any; }) => p.id === this.postId)
        }
        })
  }
}
