import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})

export class CreateComponent {

  constructor(private postService: PostService) {

  }
  postFormSubmit(form: NgForm) {

    let userPost: Post = {

      id: this.getRandomTaskId(),
      title: form.value.title,
      content: form.value.content,
      author: form.value.author,
      date: new Date(),
      age: form.value.age

    };

    this.postService.addPost(userPost);
  }

  getRandomTaskId(): string {
    const characterSet = "a0123456789";
    let result = "";
    for (let i = 0; i < 3; i++) {
      result += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    return result;
  }
}