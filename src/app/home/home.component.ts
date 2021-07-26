import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostServiceService } from '../backend/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUrl: number = 0;
  constructor(public service: PostServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList();
    let curr = this.router.url.split("/");
    console.log(this.service.list);
    //console.log(post);
    if( curr.length > 2 ){
      this.currentUrl = +curr[2];
      this.service.getSingleData(this.currentUrl);
    }
  }

}
