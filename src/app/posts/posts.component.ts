import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  receivedData: any;

  constructor(private dataService: DataService) {

  }

  ngOnInit(){
    this.receivedData = this.dataService.getData();
   
  }
 
}
