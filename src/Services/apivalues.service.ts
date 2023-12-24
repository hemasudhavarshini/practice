import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApivaluesService {
  private popupVisibleSubject = new BehaviorSubject<boolean>(false);
  popupVisible$ = this.popupVisibleSubject.asObservable();
  
  showPopup() {
    this.popupVisibleSubject.next(true);
  }

  hidePopup() {
    this.popupVisibleSubject.next(false);
  }

  private apiKey = 'd2f9c424d8ad33f7e40c2ff2fb6bd96d'; 

  constructor(private http: HttpClient) { }

  getWeather(lat: number, lon: number): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return this.http.get(apiUrl);
  }
}
