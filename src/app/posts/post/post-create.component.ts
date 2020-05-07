import { Component } from '@angular/core';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  newValue = 'Your comment';
  inputCommnets = 'Comment'
  onAddComments() {
    this.inputCommnets = this.newValue;
  }
}
