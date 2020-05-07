import { Component } from '@angular/core';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  newValue = '';
  inputCommnets = 'Comment'
  onAddComments() {
    this.inputCommnets = this.newValue;
  }
}
