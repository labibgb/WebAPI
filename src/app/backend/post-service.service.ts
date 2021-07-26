import { Injectable } from '@angular/core';
import { PostModel } from './post-model.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = "http://localhost:5000/api/post"
  formData: PostModel = new PostModel();
  list: PostModel[];
  singleData: PostModel = new PostModel();

  postFormData(){
    return this.http.post(this.baseUrl, this.formData);
  }

  putFormData(){
    return this.http.put(`${this.baseUrl}/${this.formData.postID}`,this.formData);
  }

  deleteFormData(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getSingleData(id:number){
    return this.http.get(`${this.baseUrl}/${id}`)
    .toPromise().then(res=> this.singleData = res as PostModel);
  }

  getList(){
    return this.http.get(this.baseUrl)
    .toPromise()
    .then(res => {
      this.list = res as PostModel[];});
  }
}
