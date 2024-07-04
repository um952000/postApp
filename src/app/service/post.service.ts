import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class PostService implements OnInit {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let saveDPosts = localStorage.getItem("allTaskStore");
    this.allPosts = saveDPosts ? JSON.parse(saveDPosts) : [];
  }

  private allPosts: Post[] = [];

  constructor() { }

  addPost(userPost: Post) {
    this.allPosts.push(userPost);
    console.log(this.allPosts);

    localStorage.setItem("allTaskStore", JSON.stringify(this.allPosts));
  }

  getPost(): Post[] {

    localStorage.setItem("allTaskStore", JSON.stringify(this.allPosts));
    return this.allPosts;
  }

  getPostById(id: string) {

    let post;
    for (let i = 0; i < this.allPosts.length; i++) {
      if (id === this.allPosts[i].id) {
        post = this.allPosts[i];
        break;
      }
    }
    localStorage.setItem("allTaskStore", JSON.stringify(this.allPosts));
    return post;
  }

  deletePost(id: string): void {
    this.allPosts = this.allPosts.filter(post => post.id !== id);
    localStorage.setItem("allTaskStore", JSON.stringify(this.allPosts));
  }

  updatePost(updatedPost: Post): void {
    const index = this.allPosts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      this.allPosts[index] = updatedPost;
    }

    localStorage.setItem("allTaskStore", JSON.stringify(this.allPosts));
  }
}