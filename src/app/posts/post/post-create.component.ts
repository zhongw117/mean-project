import { Component } from '@angular/core';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  onAddComment() {
    alert("Your comments was saved already!");
  }
}
