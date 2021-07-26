import { Component, Input, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/backend/post-service.service';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {

  @Input() curUrl: number;
  constructor(public service: PostServiceService) { }

  ngOnInit(): void {
  }

  onLoad(id:number){
    this.curUrl = id;
    this.service.getSingleData(id);
  }

}
