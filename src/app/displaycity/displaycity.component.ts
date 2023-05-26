import { Component, OnInit } from '@angular/core';
import { cities } from '../cities/cities';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-displaycity',
  templateUrl: './displaycity.component.html',
  styleUrls: ['./displaycity.component.css']
})

export class DisplaycityComponent implements OnInit{
  city: any;


  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>{
      this.city = cities.find((c =>{
        let paramId: string = params.get('id') || '';
        return c.id === parseInt(paramId)
      }))
    })
    
  }
}
