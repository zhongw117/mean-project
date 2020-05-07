import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   {title: 'first post', content: 'It\'s first post'},
  //   {title: 'second post', content: 'It\'s second post'},
  //   {title: 'third post', content: 'It\'s third post'},
  // ];
  @Input() posts: Post[] = [];
}
