import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { WeatherReportComponent } from './weather-report.component';
import { WeatherReportService } from './weather-report.service';

describe('WeatherReportComponent', () => {
  let component: WeatherReportComponent;
  let fixture: ComponentFixture<WeatherReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherReportComponent ],
      imports: [ FormsModule, HttpModule ],
      providers: [ WeatherReportService ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
