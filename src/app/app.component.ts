import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orderbypipe';
  name = 'Angular ' + VERSION.major;
  data = [
    { turbine_name: 'Baynne ', wind_park: 'Bayone' },
    { turbine_name: 'Salstiegl ', wind_park: 'Salzst' },
    { turbine_name: 'Chradurga - SLL2', wind_park: 'Chiarga' },
    { turbine_name: 'Moilishte ', wind_park: 'Mogihte' },
    { turbine_name: 'Mogshte ', wind_park: 'Mogshte' },
  ];
}
