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
  postIndex: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const cityId = params['id'];
      const postId = params['postId'];
      console.log(params)
      this.city = cities.find((city) => city.id === cityId);
      if (this.city) {
        this.post = this.city.post.find((p: { id: any; }) => p.id === postId);
      }
      
    });
  }
}
