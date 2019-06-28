import { Component } from '@angular/core';
import { Cocktail } from './cocktail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'cocktails';

  cocktail = new Cocktail("mojito");
}
