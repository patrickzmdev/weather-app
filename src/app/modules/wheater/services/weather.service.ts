import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '2f742350e2b7230fa4ab08d72e52a177';
  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: string): Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`, {});
  }

  convertUnixToTime(unixTimestamp: number, timezoneOffset: number): Date {
    return new Date((unixTimestamp + timezoneOffset) * 1000);
  }
}
