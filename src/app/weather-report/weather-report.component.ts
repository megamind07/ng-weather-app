import { Component, OnInit } from '@angular/core';
import { WeatherReportService } from './weather-report.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {

  city: String = "";
  weather: any;

  constructor(private weatherReportService: WeatherReportService) { }

  ngOnInit() {
  }

  get_weather() {
    this.weather = this.weatherReportService.getWeatherForCity(this.city).subscribe((response) =>
    {
      this.weather = response.list[0];
      console.log(this.weather);
    });
  }

}
