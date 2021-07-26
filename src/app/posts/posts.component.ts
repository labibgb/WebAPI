import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PostModel } from '../backend/post-model.model';
import { PostServiceService } from '../backend/post-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(public service: PostServiceService, private toaster: ToastrService) { 
  }

  ngOnInit(): void {
    this.service.getList();
  }

  populateFrom(post:PostModel){
    this.service.formData = Object.assign({}, post);
  }

  deleteData(id:number){
    if(confirm("Are you want to delete this?")){
      this.service.deleteFormData(id).subscribe(
        res=>{
          this.toaster.error("Deleted successfully", "Delete Post");
          this.service.getList();
        },
        err=>{console.log(err);}
      )
    }
  }
}