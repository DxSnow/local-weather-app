import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  icw:ICurrentWeather
//
  constructor() {
    this.icw = {
      city: 'Redmond',
      country: "US",
      date: new Date(), //gives us current date
      image:'',
      temperature:75.243,
      description: 'Rainy'

    }



   }

  ngOnInit(): void {
  }

}
