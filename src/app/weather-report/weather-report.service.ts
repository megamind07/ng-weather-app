import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherReportService {
  appid: String = '969f7f8ccb58a6c8e02c6529e39f8247';
  baseUrl: String = 'http://api.openweathermap.org/data/2.5/find?q=';
  city: String;

  constructor(private http: Http) {

  }

  getWeatherForCity(city) {
    return this.http.get(this.baseUrl + city + '&units=metric&appid=' + this.appid).map(res => res.json());
  }

}
