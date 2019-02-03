import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  baseUrl = environment.baseUrl;
  title = 'Today\'s Exchange Rates';
  imagePath = this.baseUrl + 'assets/Dollar-USD-icon.png';
}
