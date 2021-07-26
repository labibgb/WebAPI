import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/backend/post-service.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  constructor(public service: PostServiceService) { }

  ngOnInit(): void {
  }

}
