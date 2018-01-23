import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TORG Cards';
  logoPath = this.assetsBasePath() + 'assets/torg-eternity-logo.jpg';

  constructor() {
    console.log('Is production evironment: ' + environment.production);
  }

  assetsBasePath() {
    if (environment.production) {
      return 'torgcards/';
    }
    return '';
  }

}
