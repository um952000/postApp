import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PostService } from '../service/post.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrl: './detail-post.component.css'
})
export class DetailPostComponent {

  title: string;
  author: string;
  content: string;
  isEdit: boolean;

  post: Post | undefined;
  router: any;

  constructor(private activatedRoute: ActivatedRoute,
    private postService: PostService) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.post = this.postService.getPostById(id)
    this.title = this.post.title;
    this.author = this.post.author;
    this.content = this.post.content;
    this.isEdit = false;

  }

  updatePost(): void {
    if (this.post) {
      this.post.title = this.title;
      this.post.author = this.author;
      this.post.content = this.content;
      this.postService.updatePost(this.post);
      this.isEdit = !this.isEdit;
      this.router.navigate(['/show']); // Navigate back to the show component after update

    }
  }
}