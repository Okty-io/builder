import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
    <!--<app-footer></app-footer> -->
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}
