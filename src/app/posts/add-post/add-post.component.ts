import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PostModel } from 'src/app/backend/post-model.model';
import { PostServiceService } from '../../backend/post-service.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  
  constructor(public service: PostServiceService, private toaster: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if( this.service.formData.postID == null )
    {
      this.insetData(form);
    }
    else{
      this.updateData(form);
    }
  }

  insetData(form:NgForm){
    this.service.postFormData().subscribe(
      res =>{
        this.resetForm(form)
        this.toaster.success("Post Added Successfully", "Add Post");
        this.service.getList();
      },
      err => {
        console.log(err);
      }
    );
  }
  updateData(form:NgForm){
    this.service.putFormData().subscribe(
      res =>{
        this.resetForm(form)
        this.toaster.info("Update Post Successfully", "Update Post");
        this.service.getList();
      },
      err => {
        console.log(err);
      }
    );
  }
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new PostModel();
  }

}
