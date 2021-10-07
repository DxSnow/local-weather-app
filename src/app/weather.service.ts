import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IcwFilter } from './icw-filter';
import { environment } from 'src/environments/environment';
import { ICurrentWeather } from './icurrent-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {

  }
// do not write below function in constructor because you only want it to run when it is called. Not as soon as it is constructed.
  getCurrentWeather(city: string, country: string){
    return this.http.get<IcwFilter>(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.openweatherID}`)

  }




}
