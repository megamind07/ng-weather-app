import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { WeatherReportService } from './weather-report.service';

describe('WeatherReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule],
      providers: [WeatherReportService]
    });
  });

  it('should ...', inject([WeatherReportService], (service: WeatherReportService) => {
    expect(service).toBeTruthy();
  }));
});
