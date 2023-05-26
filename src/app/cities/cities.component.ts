import { Component, OnInit } from '@angular/core';
import { cities } from './cities';
import { ActivatedRoute } from '@angular/router';
import { DisplaycityComponent } from '../displaycity/displaycity.component';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit{
  cities = cities
  city: any;
  activeLinkId: any | null = null;

  constructor(private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>{
      this.city = cities.find((c =>{
        let paramId: string = params.get('id') || '';
        return c.id === parseInt(paramId)
      }))
    })
  }
}
