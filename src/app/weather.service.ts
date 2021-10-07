import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IcwFilter } from './icw-filter';
import { environment } from 'src/environments/environment';
import { ICurrentWeather } from './icurrent-weather';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {

  }
// do not write below function in constructor because you only want it to run when it is called. Not as soon as it is constructed.
  getCurrentWeather(city: string, country: string){
    this.http.get<IcwFilter>(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.openweatherID}`).pipe(map(data => this.transformToIcurrentWeather(data)))


  }
  private transformToIcurrentWeather(filtered:IcwFilter):ICurrentWeather{
    return{
      city:filtered.name,
      country:filtered.sys.country,
      date:new Date(filtered.dt * 1000),
      temperature: filtered.main.temp *9/5 - 459.67,
      description:filtered.weather[0].description,
      image:`http://openweathermap.org/img/w/${filtered.weather[0].icon}.png`
    }

  }




}
