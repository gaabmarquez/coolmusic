import { Component } from '@angular/core';

@Component({
  selector: 'cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cool Music';

  onActivate(event) {
    window.scroll(0, 0);
  }
}
