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
  //if you want a instruction to be executed when an object is created, include it in the constructor below. Otherwise, write seperate methods.

  constructor(private http: HttpClient) {
  }

  // give instruction about how to correspond data data's keys to IcurrentWeather's keys, so that data can flow from IcwFilter to ICurrentWeather using map()
  private transformToIcurrentWeather(data: IcwFilter): ICurrentWeather {
    return { //receive an obhect, return an object
      city: data.name, //key:value
      country: data.sys.country,
      date: new Date(data.dt * 1000),
      temperature: data.main.temp * 9 / 5 - 459.67,
      description: data.weather[0].description,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    }

  }

  // get data from OpenWeather APi, return IcwFilter type data, pipe that data into map(), where IcwFilter type data is transformed to ICurrentWeather type.
  // the data back from OpenWeather API is wrapped in an observable. the map function can unwrap the data, process it, and wrap it back to an observable form. ready for components to subscribe.
  getCurrentWeather(cityOrZip: string|number, country?: string) {

  //We need to select different urls based on what user put in. If user put in a city name, use one url, if user put in a zipcode, use another. See OpenWeather api for these two urls. It is identical except that one is q= the other is zip=, so we create the variable flexUrlPatch to reflect that url diffenrence.
    let flexUrlPatch = '';
    if (typeof cityOrZip === 'string'){
      flexUrlPatch = 'q=';
    }else{
      flexUrlPatch = 'zip=';
    }

  //use flexUrlPatch in the URL
    return this.http.get<IcwFilter>(`http://api.openweathermap.org/data/2.5/weather?${flexUrlPatch}${cityOrZip},${country}&appid=${environment.openweatherID}`).pipe(map(data => this.transformToIcurrentWeather(data)))

  }

  // Now we get the data we want, we need to let a component subscribe it. We choose the app.component as the subscriber because it is the parent component of search component and current-weather component. search component gets user's input, give it to its parent, its parent gets that and call service. then get data from service and give it to current-weather component to display the data. Like a relay race.



}
