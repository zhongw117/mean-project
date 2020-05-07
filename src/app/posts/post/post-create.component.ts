import { Component } from '@angular/core';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  onAddComments() {
    alert('Your comments is less than 5 words')
  }

}
