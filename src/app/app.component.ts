import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'storybook';

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
