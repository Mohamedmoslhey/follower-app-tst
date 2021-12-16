import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  datas: any = [];

  constructor(private service: PostService) {

  }
  ngOnInit(): void {
    this.service.getAll().subscribe(datas => this.datas = datas, error => {

      console.log(error);
    })
  }
  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.service.createIt(post).subscribe(
      newPost => {
        post.id = newPost;
        this.datas.splice(0, 0, post);
      }, error => {
        alert("unexpexted error occur");
        console.log(error);
      })
  }
  updatePost(post: any) {
    this.service.updateIt(post).subscribe(
      updatePost => {
        console.log(updatePost);
      }, error => {
        alert("unexpexted error occur");
        console.log(error);
      })
  }
  delPost(post: any) {

    this.service.delIt(post.id).subscribe(
      () => {
        let inex = this.datas.indexOf(post);
        this.datas.splice(inex, 1);
      }, error => {
        alert("unexpexted error occur");
        console.log(error);
      })
  }
}
