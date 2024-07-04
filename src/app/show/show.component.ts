import { Component } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})

export class ShowComponent {

  allPost: Post[] = [];

  constructor(private postService: PostService) {

    this.allPost = postService.getPost();

  }

  deletePost(id: string): void {
    this.postService.deletePost(id);
    this.allPost = this.postService.getPost();
  }
}