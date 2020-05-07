import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  newPostTitle = '';
  newPostContent = '';
  @Output() createdPost = new EventEmitter();

  onAddComments() {
    const post: Post = {
      title: this.newPostTitle,
      content: this.newPostContent
      };
      this.createdPost.emit(post);
  }
}
