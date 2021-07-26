import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  @Input() post : {postID: number, title: string, content: string}
  constructor() { }

  ngOnInit(): void {
  }

}
