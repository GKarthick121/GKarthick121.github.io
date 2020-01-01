import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[slideInOutAnimation],
  host:{'[@slideInOutAnimation]': '' }
})
export class HomeComponent  {

}
